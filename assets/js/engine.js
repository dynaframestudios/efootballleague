/* ============================================================
   ENGINE — generates fixtures & standings from data.js.
   You shouldn't need to edit this file.
   ============================================================ */

function generateFixtures(teamsInput) {
  let teams = [...teamsInput];
  const hasBye = teams.length % 2 !== 0;
  if (hasBye) teams.push("BYE");

  const n = teams.length;
  const rounds = n - 1;
  const half = n / 2;
  let schedule = [];

  let arr = [...teams];
  for (let r = 0; r < rounds; r++) {
    let roundMatches = [];
    for (let i = 0; i < half; i++) {
      const home = arr[i];
      const away = arr[n - 1 - i];
      if (home !== "BYE" && away !== "BYE") {
        // alternate home/away by round parity for fairness
        if (r % 2 === 0) roundMatches.push({ home, away });
        else roundMatches.push({ home: away, away: home });
      }
    }
    schedule.push(roundMatches);
    // rotate (keep first team fixed)
    arr.splice(1, 0, arr.pop());
  }

  // Second half of season = reverse fixtures (away becomes home)
  const secondLeg = schedule.map(round =>
    round.map(m => ({ home: m.away, away: m.home }))
  );

  const fullSchedule = [...schedule, ...secondLeg].map((round, idx) => ({
    round: idx + 1,
    matches: round
  }));

  return fullSchedule;
}

function attachResults(fixtures, results) {
  return fixtures.map(round => ({
    round: round.round,
    matches: round.matches.map(m => {
      const played = results.find(r =>
        r.round === round.round && r.home === m.home && r.away === m.away
      );
      return {
        home: m.home,
        away: m.away,
        homeScore: played ? played.homeScore : null,
        awayScore: played ? played.awayScore : null,
        forfeit: !!(played && played.forfeit),
        played: !!(played && played.homeScore !== null && played.awayScore !== null)
      };
    })
  }));
}

function computeStandings(teams, fixturesWithResults) {
  const table = {};
  teams.forEach(t => {
    table[t] = {
      team: t, played: 0, won: 0, drawn: 0, lost: 0,
      gf: 0, ga: 0, gd: 0, points: 0
    };
  });

  fixturesWithResults.forEach(round => {
    round.matches.forEach(m => {
      if (!m.played) return;
      const h = table[m.home], a = table[m.away];
      if (!h || !a) return;
      h.played++; a.played++;
      h.gf += m.homeScore; h.ga += m.awayScore;
      a.gf += m.awayScore; a.ga += m.homeScore;

      if (m.homeScore > m.awayScore) { h.won++; h.points += 3; a.lost++; }
      else if (m.homeScore < m.awayScore) { a.won++; a.points += 3; h.lost++; }
      else { h.drawn++; a.drawn++; h.points++; a.points++; }
    });
  });

  const arr = Object.values(table).map(t => ({ ...t, gd: t.gf - t.ga }));
  arr.sort((x, y) =>
    y.points - x.points || y.gd - x.gd || y.gf - x.gf || x.team.localeCompare(y.team)
  );
  return arr;
}

// How many bottom-of-table spots are up for relegation.
function getRelegationCount(teamCount) {
  if (teamCount >= 16) return 4;
  if (teamCount >= 10) return 3;
  return 0;
}

// ---------- AUTOMATIC MOVEMENT ARROWS ----------
// Figures out the highest matchday number that has at least one played result.
function getLatestPlayedRound(fixturesWithResults) {
  let latest = 0;
  fixturesWithResults.forEach(round => {
    const hasPlayed = round.matches.some(m => m.played);
    if (hasPlayed && round.round > latest) latest = round.round;
  });
  return latest;
}

// Derives "last week's" table order automatically: it recomputes standings
// using only results from BEFORE the most recent matchday, so movement
// arrows just work off whatever's in RESULTS — no manual copy/paste needed.
function computeAutoPreviousOrder(teams, fixturesWithResults) {
  const latestRound = getLatestPlayedRound(fixturesWithResults);
  if (latestRound <= 0) return []; // nothing played yet -> no history
  const priorFixtures = fixturesWithResults.map(round => ({
    round: round.round,
    matches: round.round < latestRound ? round.matches : round.matches.map(m => ({ ...m, played: false }))
  }));
  const hadAnyEarlierResult = priorFixtures.some(r => r.matches.some(m => m.played));
  if (!hadAnyEarlierResult) return []; // this is matchday 1 -> no prior table to compare to
  const priorStandings = computeStandings(teams, priorFixtures);
  return priorStandings.map(t => t.team);
}

// Standings + relegation flag + movement arrow ('up' | 'down' | 'same' | 'new')
// vs. the previous week's order (an array of team names, top to bottom).
// Pass previousOrder = null/undefined to have it figured out automatically
// from the results already in RESULTS (recommended — see computeAutoPreviousOrder).
function computeStandingsWithMeta(teams, fixturesWithResults, previousOrder) {
  const arr = computeStandings(teams, fixturesWithResults);
  const relCount = getRelegationCount(teams.length);
  const order = (Array.isArray(previousOrder) && previousOrder.length > 0)
    ? previousOrder
    : computeAutoPreviousOrder(teams, fixturesWithResults);
  const hasPrev = order.length > 0;
  previousOrder = order;

  return arr.map((t, i) => {
    let movement = 'same';
    if (hasPrev) {
      const prevIndex = previousOrder.indexOf(t.team);
      if (prevIndex === -1) movement = 'new';
      else if (prevIndex > i) movement = 'up';
      else if (prevIndex < i) movement = 'down';
      else movement = 'same';
    } else {
      movement = 'none'; // no history yet, don't show an arrow
    }
    return { ...t, movement, relegation: relCount > 0 && i >= arr.length - relCount };
  });
}
