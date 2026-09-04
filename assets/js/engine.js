/* ============================================================
   ENGINE — generates fixtures & standings from data.js.
   You shouldn't need to edit this file.
   ============================================================ */

// ---------- FIXTURE GENERATION (legs back-to-back) ----------
// MD1 = leg 1 of round 1 (e.g. Heathens United vs Spartanburg FC),
// MD2 = leg 2 of round 1 (the reverse fixture), MD3 = leg 1 of round 2,
// etc. — so the return fixture always falls on the very next matchday,
// matching "both legs played back to back."
// No per-matchday date is auto-assigned: the whole league phase fits
// inside one season window (see computeSeasonWindow below) and you play
// as many matchdays a day as works — dates aren't tied 1:1 to matchdays.
function generateFixtures(teamsInput) {
  let teams = [...teamsInput];
  const hasBye = teams.length % 2 !== 0;
  if (hasBye) teams.push("BYE");

  const n = teams.length;
  const roundsCount = n - 1;
  const half = n / 2;

  let arr = [...teams];
  let baseRounds = [];
  for (let r = 0; r < roundsCount; r++) {
    let roundMatches = [];
    for (let i = 0; i < half; i++) {
      const home = arr[i];
      const away = arr[n - 1 - i];
      if (home !== "BYE" && away !== "BYE") {
        if (r % 2 === 0) roundMatches.push({ home, away });
        else roundMatches.push({ home: away, away: home });
      }
    }
    baseRounds.push(roundMatches);
    arr.splice(1, 0, arr.pop());
  }

  let matchday = 1;
  let schedule = [];
  baseRounds.forEach(round => {
    schedule.push({
      matchday: matchday++,
      matches: round.map(m => ({ home: m.home, away: m.away, homeScore: null, awayScore: null, forfeit: false }))
    });
    schedule.push({
      matchday: matchday++,
      matches: round.map(m => ({ home: m.away, away: m.home, homeScore: null, awayScore: null, forfeit: false }))
    });
  });

  return schedule;
}

// ---------- SEASON WINDOW ----------
// One block of dates for the whole season, not per-matchday:
//   startDate -> +leagueWindowDays  = league phase
//   ... -> +cupWindowDays           = cup phase (excluding eFootballerz Cup,
//                                      which everyone plays throughout)
//   nextSeasonStart                 = next season's kickoff (the 23rd)
function computeSeasonWindow({ startDate, leagueWindowDays = 15, cupWindowDays = 10, nextSeasonStart = null }) {
  const addDays = (dateStr, days) => {
    const d = new Date(dateStr + "T00:00:00");
    d.setDate(d.getDate() + days);
    return d.toISOString().slice(0, 10);
  };
  const leagueEnd = addDays(startDate, leagueWindowDays);
  const cupEnd = addDays(leagueEnd, cupWindowDays);
  return {
    leagueStart: startDate,
    leagueEnd,
    cupStart: leagueEnd,
    cupEnd,
    nextSeasonStart: nextSeasonStart || cupEnd
  };
}

function isPlayed(m) {
  return m.homeScore !== null && m.homeScore !== undefined &&
         m.awayScore !== null && m.awayScore !== undefined;
}

// ---------- STANDINGS ----------
function computeStandings(teams, fixtures) {
  const table = {};
  teams.forEach(t => {
    table[t] = { team: t, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 };
  });

  fixtures.forEach(md => {
    md.matches.forEach(m => {
      if (!isPlayed(m)) return;
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

// ---------- AUTOMATIC MOVEMENT ARROWS ----------
function getLatestPlayedMatchday(fixtures) {
  let latest = 0;
  fixtures.forEach(md => {
    if (md.matches.some(isPlayed) && md.matchday > latest) latest = md.matchday;
  });
  return latest;
}

function computeAutoPreviousOrder(teams, fixtures) {
  const latest = getLatestPlayedMatchday(fixtures);
  if (latest <= 0) return [];
  const prior = fixtures.map(md => ({
    matchday: md.matchday,
    matches: md.matchday < latest ? md.matches : md.matches.map(m => ({ ...m, homeScore: null, awayScore: null }))
  }));
  const hadEarlier = prior.some(md => md.matches.some(isPlayed));
  if (!hadEarlier) return [];
  return computeStandings(teams, prior).map(t => t.team);
}

// ---------- FORM GUIDE (last 5 results, chronological by matchday) ----------
function computeForm(team, fixtures) {
  const played = [];
  fixtures.forEach(md => {
    md.matches.forEach(m => {
      if (!isPlayed(m)) return;
      if (m.home !== team && m.away !== team) return;
      const isHome = m.home === team;
      const gf = isHome ? m.homeScore : m.awayScore;
      const ga = isHome ? m.awayScore : m.homeScore;
      let result = 'D';
      if (gf > ga) result = 'W'; else if (gf < ga) result = 'L';
      played.push({ matchday: md.matchday, result });
    });
  });
  played.sort((a, b) => a.matchday - b.matchday);
  return played.slice(-5).map(p => p.result);
}

// Standings + movement arrow + form guide, all in one pass.
function computeStandingsWithMeta(teams, fixtures, previousOrder) {
  const arr = computeStandings(teams, fixtures);
  const order = (Array.isArray(previousOrder) && previousOrder.length > 0)
    ? previousOrder
    : computeAutoPreviousOrder(teams, fixtures);
  const hasPrev = order.length > 0;

  return arr.map((t, i) => {
    let movement = 'none';
    if (hasPrev) {
      const prevIndex = order.indexOf(t.team);
      if (prevIndex === -1) movement = 'new';
      else if (prevIndex > i) movement = 'up';
      else if (prevIndex < i) movement = 'down';
      else movement = 'same';
    }
    return { ...t, movement, form: computeForm(t.team, fixtures) };
  });
}

// Position -> qualification zone class.
//  1st            -> champion-row      (League + Super Cup + Champions Cup, gold/blue gradient)
//  2nd - 8th       -> champs-cup-row    (Champions Cup, blue)
//  9th - 16th      -> conference-row    (Conference Cup, orange)
//  18th+           -> no zone
function zoneForPosition(position) {
  if (position === 1) return 'champion-row';
  if (position >= 2 && position <= 8) return 'champs-cup-row';
  if (position >= 9 && position <= 16) return 'conference-row';
  return '';
}

// ---------- CROSS-COMPETITION TEAM LOOKUP ----------
// Every match involving `team` across the league + every cup, tagged with
// its competition, for the team info panel ("tap a team to see their
// fixtures & results" — including cup games, not just league ones).
function getTeamMatches(team, comps) {
  const { fixtures, domesticCup, championsCup, conferenceCup, superCup, championsSuperCup } = comps;
  const all = [];

  (fixtures || []).forEach(md => {
    md.matches.forEach(m => {
      if (m.home === team || m.away === team) {
        all.push({ competition: 'League', round: `Matchday ${md.matchday}`, date: md.date, ...m });
      }
    });
  });

  function pullCup(cup, label) {
    if (!cup || !cup.active || !cup.rounds) return;
    cup.rounds.forEach(round => {
      round.matches.forEach(m => {
        if (m.home === team || m.away === team) {
          all.push({ competition: label, round: round.label, date: round.date || m.date, ...m });
        }
      });
    });
  }
  pullCup(domesticCup, 'eFootballerz Cup');
  pullCup(championsCup, 'Champions Cup');
  pullCup(conferenceCup, 'Conference Cup');

  if (superCup && superCup.active && (superCup.teamA === team || superCup.teamB === team)) {
    (superCup.legs || []).forEach(leg => {
      all.push({ competition: 'Super Cup', round: 'Final', date: leg.date, ...leg });
    });
  }
  if (championsSuperCup && championsSuperCup.active && (championsSuperCup.teamA === team || championsSuperCup.teamB === team)) {
    (championsSuperCup.legs || []).forEach(leg => {
      all.push({ competition: 'Champions Super Cup', round: 'Final', date: leg.date, ...leg });
    });
  }

  const played = all.filter(m => m.homeScore !== null && m.homeScore !== undefined && m.awayScore !== null && m.awayScore !== undefined);
  const upcoming = all.filter(m => !played.includes(m));
  played.sort((a, b) => (a.date || '').localeCompare(b.date || ''));
  upcoming.sort((a, b) => (a.date || '').localeCompare(b.date || ''));
  return { played, upcoming, all };
}

// Head-to-head record between two teams (league matches).
function getHeadToHead(teamA, teamB, fixtures) {
  const meetings = [];
  fixtures.forEach(md => {
    md.matches.forEach(m => {
      const involved = (m.home === teamA && m.away === teamB) || (m.home === teamB && m.away === teamA);
      if (involved && isPlayed(m)) meetings.push({ matchday: md.matchday, date: md.date, ...m });
    });
  });
  let aWins = 0, bWins = 0, draws = 0;
  meetings.forEach(m => {
    const aIsHome = m.home === teamA;
    const aScore = aIsHome ? m.homeScore : m.awayScore;
    const bScore = aIsHome ? m.awayScore : m.homeScore;
    if (aScore > bScore) aWins++; else if (bScore > aScore) bWins++; else draws++;
  });
  return { meetings, aWins, bWins, draws };
}
