// ---------- TAB SWITCHING ----------
document.querySelectorAll('nav.tabs button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('nav.tabs button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('section.view').forEach(v => v.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('view-' + btn.dataset.view).classList.add('active');
  });
});

// ---------- HELPERS ----------
function movementArrow(movement) {
  if (movement === 'up') return '<span class="mv-arrow mv-up">▲</span>';
  if (movement === 'down') return '<span class="mv-arrow mv-down">▼</span>';
  if (movement === 'same') return '<span class="mv-arrow mv-same">–</span>';
  if (movement === 'new') return '<span class="mv-arrow mv-new">NEW</span>';
  return ''; // 'none' — no history yet
}

function teamInfoPanelHTML(teamName) {
  const info = (typeof TEAM_INFO !== 'undefined') ? TEAM_INFO[teamName] : null;
  if (!info) {
    return `<div class="team-info-panel"><span class="none">No info on file for ${teamName} yet.</span></div>`;
  }
  const fields = [
    ['Playstyle', info.playstyle],
    ['Highest Division', info.highestDivision],
    ['Manager', info.manager],
    ['User', info.user],
    ['Titles', info.titles]
  ];
  return `<div class="team-info-panel">${fields.map(([label, value]) => `
    <div class="info-item">
      <span class="label">${label}</span>
      <span class="value">${value !== undefined && value !== '' ? value : '—'}</span>
    </div>
  `).join('')}</div>`;
}

// Makes team-name cells in a rendered standings table expandable to show TEAM_INFO.
function enableTeamInfoDropdowns(tbodyEl) {
  tbodyEl.querySelectorAll('td.team').forEach(cell => {
    cell.addEventListener('click', () => {
      const row = cell.closest('tr');
      const existing = row.nextElementSibling;
      if (existing && existing.classList.contains('team-info-row')) {
        existing.remove();
        return;
      }
      // close any other open panel in this table
      tbodyEl.querySelectorAll('tr.team-info-row').forEach(r => r.remove());
      const colSpan = row.children.length;
      const infoRow = document.createElement('tr');
      infoRow.className = 'team-info-row';
      infoRow.innerHTML = `<td colspan="${colSpan}">${teamInfoPanelHTML(cell.textContent.trim())}</td>`;
      row.after(infoRow);
    });
  });
}

function renderStandingsInto(tbodyEl, standingsMeta) {
  tbodyEl.innerHTML = '';
  standingsMeta.forEach((t, i) => {
    const tr = document.createElement('tr');
    if (i === 0) tr.classList.add('top2');
    if (i >= 1 && i < 8) tr.classList.add('champs-cup-row');
    tr.innerHTML = `
      <td class="pos">${i + 1}</td>
      <td class="mv">${movementArrow(t.movement)}</td>
      <td class="team"><span class="team-name">${t.team}</span></td>
      <td class="num">${t.played}</td>
      <td class="num">${t.won}</td>
      <td class="num">${t.drawn}</td>
      <td class="num">${t.lost}</td>
      <td class="num">${t.gf}</td>
      <td class="num">${t.ga}</td>
      <td class="num">${t.gd > 0 ? '+' + t.gd : t.gd}</td>
      <td class="num pts">${t.points}</td>
    `;
    tbodyEl.appendChild(tr);
  });
  enableTeamInfoDropdowns(tbodyEl);
}

function renderFixturesInto(containerEl, fixturesWithResults, emptyMessage) {
  containerEl.innerHTML = '';
  if (!fixturesWithResults.length || fixturesWithResults.every(r => r.matches.length === 0)) {
    containerEl.innerHTML = `<div class="empty-state">${emptyMessage}</div>`;
    return;
  }
  fixturesWithResults.forEach(round => {
    const group = document.createElement('div');
    group.className = 'round-group';
    const label = document.createElement('div');
    label.className = 'round-label';
    label.textContent = `Matchweek ${round.round}`;
    group.appendChild(label);

    const grid = document.createElement('div');
    grid.className = 'fixture-grid';
    round.matches.forEach(m => {
      const card = document.createElement('div');
      card.className = 'match-card' + (m.played ? ' played' : '') + (m.forfeit ? ' forfeit' : '');
      card.innerHTML = `
        ${m.forfeit ? '<div class="forfeit-tag">FORFEIT</div>' : ''}
        <div class="side home">${m.home}</div>
        <div class="score">${m.played ? `${m.homeScore} - ${m.awayScore}` : 'vs'}</div>
        <div class="side away">${m.away}</div>
      `;
      grid.appendChild(card);
    });
    group.appendChild(grid);
    containerEl.appendChild(group);
  });
}

// ---------- DIVISION 1: BUILD DATA ----------
const fixtures = generateFixtures(TEAMS);
const fixturesWithResults = attachResults(fixtures, RESULTS);
const standings = computeStandingsWithMeta(TEAMS, fixturesWithResults, PREVIOUS_STANDINGS_ORDER);

// ---------- RENDER DIVISION 1 STANDINGS ----------
renderStandingsInto(document.getElementById('standings-body'), standings);

// ---------- RENDER DIVISION 1 FIXTURES ----------
renderFixturesInto(
  document.getElementById('fixtures-list'),
  fixturesWithResults,
  'Add teams in data.js to generate fixtures.'
);

// ---------- RENDER SUPER CUP ----------
const supercupContent = document.getElementById('supercup-content');
if (!SUPER_CUP.active) {
  supercupContent.innerHTML = `<div class="empty-state">The Super Cup kicks off once the top 2 finish the league season.</div>`;
} else {
  let html = `
    <div class="supercup-banner">
      <h2>Super Cup</h2>
      <div class="supercup-teams">${SUPER_CUP.teamA} vs ${SUPER_CUP.teamB}</div>
    </div>
    <div class="fixture-grid">
  `;
  SUPER_CUP.legs.forEach(leg => {
    const played = leg.homeScore !== null && leg.awayScore !== null;
    html += `
      <div class="match-card${played ? ' played' : ''}">
        <div class="side home">${leg.home}</div>
        <div class="score">${played ? `${leg.homeScore} - ${leg.awayScore}` : 'vs'}</div>
        <div class="side away">${leg.away}</div>
      </div>
    `;
  });
  html += `</div>`;
  supercupContent.innerHTML = html;
}

// ---------- CUPS (Domestic Cup + Top 4 Cup) ----------
function renderCupRounds(containerEl, cup, emptyMessage) {
  if (!cup || !cup.active || !cup.rounds || cup.rounds.length === 0) {
    containerEl.innerHTML = `<div class="empty-state">${emptyMessage}</div>`;
    return;
  }
  let html = cup.blurb ? `<p style="color:var(--text-dim); font-size:13px; margin-bottom:14px;">${cup.blurb}</p>` : '';
  cup.rounds.forEach(round => {
    html += `<div class="cup-round"><div class="cup-round-label">${round.label}</div><div class="fixture-grid">`;
    round.matches.forEach(m => {
      const played = m.homeScore !== null && m.homeScore !== undefined && m.awayScore !== null && m.awayScore !== undefined;
      html += `
        <div class="match-card${played ? ' played' : ''}">
          <div class="side home">${m.home || 'TBD'}</div>
          <div class="score">${played ? `${m.homeScore} - ${m.awayScore}` : 'vs'}</div>
          <div class="side away">${m.away || 'TBD'}</div>
        </div>
      `;
    });
    html += `</div></div>`;
  });
  containerEl.innerHTML = html;
}

renderCupRounds(
  document.getElementById('domesticcup-content'),
  (typeof DOMESTIC_CUP !== 'undefined') ? DOMESTIC_CUP : null,
  'The Domestic Cup hasn\'t kicked off yet.'
);
renderCupRounds(
  document.getElementById('top4cup-content'),
  (typeof TOP4_CUP !== 'undefined') ? TOP4_CUP : null,
  'The Top 4 Cup kicks off once the Division 1 season ends.'
);

// ---------- REGULATIONS ----------
const regulationsContent = document.getElementById('regulations-content');
if (typeof REGULATIONS !== 'undefined' && REGULATIONS.length > 0) {
  regulationsContent.innerHTML = REGULATIONS.map(sec => `
    <div class="reg-section">
      <h3>${sec.heading}</h3>
      <p>${sec.body}</p>
    </div>
  `).join('');
} else {
  regulationsContent.innerHTML = `<div class="empty-state">Regulations coming soon.</div>`;
}

// ---------- RENDER WALL OF CHAMPIONS ----------
const leagueChampsEl = document.getElementById('league-champs');
const domesticCupChampsEl = document.getElementById('domesticcup-champs');
const top4CupChampsEl = document.getElementById('top4cup-champs');
const supercupChampsEl = document.getElementById('supercup-champs');

if (CHAMPIONS.league.length === 0) {
  leagueChampsEl.innerHTML = `<div class="empty-state">No champions crowned yet.</div>`;
} else {
  CHAMPIONS.league.slice().reverse().forEach(c => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${c.team}</span><span class="season">${c.season}</span>`;
    leagueChampsEl.appendChild(li);
  });
}

if (!CHAMPIONS.domesticCup || CHAMPIONS.domesticCup.length === 0) {
  domesticCupChampsEl.innerHTML = `<div class="empty-state">No Domestic Cup winners yet.</div>`;
} else {
  CHAMPIONS.domesticCup.slice().reverse().forEach(c => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${c.team}</span><span class="season">${c.season}</span>`;
    domesticCupChampsEl.appendChild(li);
  });
}

if (!CHAMPIONS.top4Cup || CHAMPIONS.top4Cup.length === 0) {
  top4CupChampsEl.innerHTML = `<div class="empty-state">No Top 4 Cup winners yet.</div>`;
} else {
  CHAMPIONS.top4Cup.slice().reverse().forEach(c => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${c.team}</span><span class="season">${c.season}</span>`;
    top4CupChampsEl.appendChild(li);
  });
}

if (CHAMPIONS.superCup.length === 0) {
  supercupChampsEl.innerHTML = `<div class="empty-state">No Super Cup winners yet.</div>`;
} else {
  CHAMPIONS.superCup.slice().reverse().forEach(c => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${c.team}</span><span class="season">${c.edition}</span>`;
    supercupChampsEl.appendChild(li);
  });
}


// ---------- MUSIC PLAYER ----------
const audioEl = document.getElementById('audio-el');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const seek = document.getElementById('seek');

let trackIndex = 0;
let isPlaying = false;

function loadTrack(i) {
  if (TRACKS.length === 0) return;
  trackIndex = (i + TRACKS.length) % TRACKS.length;
  const t = TRACKS[trackIndex];
  audioEl.src = t.src;
  trackTitle.textContent = t.title;
  trackArtist.textContent = t.artist;
}

function setPlayingUI(playing) {
  isPlaying = playing;
  playBtn.textContent = playing ? '⏸' : '▶';
}

if (TRACKS.length > 0) loadTrack(0);

// Try to autoplay as soon as the page loads. Most browsers block audio with
// sound until the visitor has interacted with the page at least once — if
// that happens, we fall back to starting playback on the first click/tap/key
// press anywhere on the site, so it still starts automatically without
// needing the play button.
function attemptAutoplay() {
  if (TRACKS.length === 0) return;
  const playPromise = audioEl.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => setPlayingUI(true))
      .catch(() => {
        setPlayingUI(false);
        const startOnInteraction = () => {
          audioEl.play().then(() => setPlayingUI(true)).catch(() => {});
          document.removeEventListener('click', startOnInteraction);
          document.removeEventListener('keydown', startOnInteraction);
          document.removeEventListener('touchstart', startOnInteraction);
        };
        document.addEventListener('click', startOnInteraction, { once: true });
        document.addEventListener('keydown', startOnInteraction, { once: true });
        document.addEventListener('touchstart', startOnInteraction, { once: true });
      });
  }
}
attemptAutoplay();

playBtn.addEventListener('click', () => {
  if (TRACKS.length === 0) return;
  if (isPlaying) { audioEl.pause(); setPlayingUI(false); }
  else { audioEl.play(); setPlayingUI(true); }
});

prevBtn.addEventListener('click', () => { loadTrack(trackIndex - 1); if (isPlaying) audioEl.play(); });
nextBtn.addEventListener('click', () => { loadTrack(trackIndex + 1); if (isPlaying) audioEl.play(); });
audioEl.addEventListener('ended', () => { loadTrack(trackIndex + 1); audioEl.play(); });

audioEl.addEventListener('timeupdate', () => {
  if (audioEl.duration) seek.value = (audioEl.currentTime / audioEl.duration) * 100;
});
seek.addEventListener('input', () => {
  if (audioEl.duration) audioEl.currentTime = (seek.value / 100) * audioEl.duration;
});
