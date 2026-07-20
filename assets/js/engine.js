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
