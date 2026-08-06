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

function renderStandingsInto(tbodyEl, standingsMeta) {
  tbodyEl.innerHTML = '';
  standingsMeta.forEach((t, i) => {
    const tr = document.createElement('tr');
    if (i < 2) tr.classList.add('top2');
    if (t.relegation) tr.classList.add('relegation-row');
    tr.innerHTML = `
      <td class="pos">${i + 1}</td>
      <td class="mv">${movementArrow(t.movement)}</td>
      <td class="team">${t.team}</td>
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

// ---------- DIVISION 2 ----------
const division2Content = document.getElementById('division2-content');
if (!TEAMS2 || TEAMS2.length === 0) {
  division2Content.innerHTML = `<div class="empty-state">Division 2 hasn't launched yet — add teams to TEAMS2 in data.js to kick it off.</div>`;
} else {
  const fixtures2 = generateFixtures(TEAMS2);
  const fixturesWithResults2 = attachResults(fixtures2, RESULTS2);
  const standings2 = computeStandingsWithMeta(TEAMS2, fixturesWithResults2, PREVIOUS_STANDINGS_ORDER2);

  division2Content.innerHTML = `
    <h3 class="subsection-title">Division 2 Table</h3>
    <table class="standings">
      <thead>
        <tr>
          <th class="pos">#</th>
          <th class="mv"></th>
          <th class="team">Team</th>
          <th class="num">P</th>
          <th class="num">W</th>
          <th class="num">D</th>
          <th class="num">L</th>
          <th class="num">GF</th>
          <th class="num">GA</th>
          <th class="num">GD</th>
          <th class="num pts">PTS</th>
        </tr>
      </thead>
      <tbody id="standings-body-2"></tbody>
    </table>
    <p class="table-legend">
      <span class="legend-item"><span class="swatch gold"></span> Automatic promotion (1st)</span>
      <span class="legend-item"><span class="swatch cyan"></span> Promotion playoff spot (2nd-5th)</span>
    </p>
    <h3 class="subsection-title" style="margin-top:30px;">Division 2 Fixtures &amp; Results</h3>
    <div id="fixtures-list-2"></div>
  `;

  const standingsBody2 = document.getElementById('standings-body-2');
  standings2.forEach((t, i) => {
    const tr = document.createElement('tr');
    if (i === 0) tr.classList.add('promo-auto');
    else if (i >= 1 && i <= 4) tr.classList.add('promo-playoff');
    tr.innerHTML = `
      <td class="pos">${i + 1}</td>
      <td class="mv">${movementArrow(t.movement)}</td>
      <td class="team">${t.team}</td>
      <td class="num">${t.played}</td>
      <td class="num">${t.won}</td>
      <td class="num">${t.drawn}</td>
      <td class="num">${t.lost}</td>
      <td class="num">${t.gf}</td>
      <td class="num">${t.ga}</td>
      <td class="num">${t.gd > 0 ? '+' + t.gd : t.gd}</td>
      <td class="num pts">${t.points}</td>
    `;
    standingsBody2.appendChild(tr);
  });

  renderFixturesInto(
    document.getElementById('fixtures-list-2'),
    fixturesWithResults2,
    'No Division 2 fixtures yet.'
  );
}

// ---------- PROMOTION PLAYOFFS ----------
const promotionContent = document.getElementById('promotion-content');
if (!PROMOTION_PLAYOFFS.active) {
  promotionContent.innerHTML = `<div class="empty-state">Promotion playoffs kick off once the Division 2 season ends.</div>`;
} else {
  const p = PROMOTION_PLAYOFFS;
  let html = `
    <p style="color:var(--text-dim); font-size:13px; margin-bottom:14px;">
      SF1: ${p.seed2} (2nd) vs ${p.seed5} (5th) &nbsp;|&nbsp; SF2: ${p.seed3} (3rd) vs ${p.seed4} (4th)
    </p>
    <div class="fixture-grid">
  `;
  p.semis.forEach(leg => {
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

  if (p.final && (p.final.home || p.final.away)) {
    const finalPlayed = p.final.homeScore !== null && p.final.homeScore !== undefined
      && p.final.awayScore !== null && p.final.awayScore !== undefined;
    html += `
      <h3 class="subsection-title" style="margin-top:24px;">Final</h3>
      <div class="fixture-grid">
        <div class="match-card${finalPlayed ? ' played' : ''}">
          <div class="side home">${p.final.home}</div>
          <div class="score">${finalPlayed ? `${p.final.homeScore} - ${p.final.awayScore}` : 'vs'}</div>
          <div class="side away">${p.final.away}</div>
        </div>
      </div>
    `;
  }

  promotionContent.innerHTML = html;
}

// ---------- RENDER WALL OF CHAMPIONS ----------
const leagueChampsEl = document.getElementById('league-champs');
const supercupChampsEl = document.getElementById('supercup-champs');
const division2ChampsEl = document.getElementById('division2-champs');

if (CHAMPIONS.league.length === 0) {
  leagueChampsEl.innerHTML = `<div class="empty-state">No champions crowned yet.</div>`;
} else {
  CHAMPIONS.league.slice().reverse().forEach(c => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${c.team}</span><span class="season">${c.season}</span>`;
    leagueChampsEl.appendChild(li);
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

if (!CHAMPIONS.division2 || CHAMPIONS.division2.length === 0) {
  division2ChampsEl.innerHTML = `<div class="empty-state">No Division 2 champions yet.</div>`;
} else {
  CHAMPIONS.division2.slice().reverse().forEach(c => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${c.team}</span><span class="season">${c.season}</span>`;
    division2ChampsEl.appendChild(li);
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
