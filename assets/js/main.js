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
  return '';
}

function formDotsHTML(form) {
  if (!form || form.length === 0) return '<span class="form-none">—</span>';
  return form.map(r => {
    const cls = r === 'W' ? 'form-w' : r === 'L' ? 'form-l' : 'form-d';
    return `<span class="form-dot ${cls}" title="${r === 'W' ? 'Win' : r === 'L' ? 'Loss' : 'Draw'}"></span>`;
  }).join('');
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' });
}

function matchLineHTML(m) {
  const played = m.homeScore !== null && m.homeScore !== undefined && m.awayScore !== null && m.awayScore !== undefined;
  return `
    <div class="team-match-line${m.forfeit ? ' forfeit' : ''}">
      <span class="tm-comp">${m.competition}${m.round ? ' · ' + m.round : ''}</span>
      <span class="tm-fixture">${m.home} <span class="tm-score">${played ? `${m.homeScore} - ${m.awayScore}` : 'vs'}</span> ${m.away}</span>
      ${m.date ? `<span class="tm-date">${formatDate(m.date)}</span>` : ''}
    </div>`;
}

function teamInfoPanelHTML(teamName) {
  const info = (typeof TEAM_INFO !== 'undefined') ? TEAM_INFO[teamName] : null;
  const infoBlock = !info
    ? `<span class="none">No info on file for ${teamName} yet.</span>`
    : `<div class="team-info-grid">${[
        ['Playstyle', info.playstyle], ['Highest Division', info.highestDivision || info.highestPosition],
        ['Manager', info.manager], ['User', info.user], ['Titles', info.titles]
      ].map(([label, value]) => `
        <div class="info-item">
          <span class="label">${label}</span>
          <span class="value">${value !== undefined && value !== '' ? value : '—'}</span>
        </div>`).join('')}</div>`;

  let fixturesBlock = '';
  if (typeof getTeamMatches === 'function') {
    const comps = {
      fixtures: (typeof fixturesWithResults !== 'undefined') ? fixturesWithResults : [],
      domesticCup: (typeof DOMESTIC_CUP !== 'undefined') ? DOMESTIC_CUP : null,
      championsCup: (typeof CHAMPIONS_CUP !== 'undefined') ? CHAMPIONS_CUP : null,
      conferenceCup: (typeof CONFERENCE_CUP !== 'undefined') ? CONFERENCE_CUP : null,
      superCup: (typeof SUPER_CUP !== 'undefined') ? SUPER_CUP : null,
      championsSuperCup: (typeof CHAMPIONS_SUPER_CUP !== 'undefined') ? CHAMPIONS_SUPER_CUP : null,
    };
    const { played, upcoming } = getTeamMatches(teamName, comps);

    const upcomingHTML = upcoming.length
      ? upcoming.slice(0, 5).map(matchLineHTML).join('')
      : `<span class="none">No upcoming fixtures.</span>`;
    const resultsHTML = played.length
      ? played.slice(-5).reverse().map(matchLineHTML).join('')
      : `<span class="none">No results yet.</span>`;

    fixturesBlock = `
      <div class="team-matches-cols">
        <div>
          <div class="tm-subheading">Upcoming</div>
          ${upcomingHTML}
        </div>
        <div>
          <div class="tm-subheading">Recent Results</div>
          ${resultsHTML}
        </div>
      </div>`;
  }

  return `<div class="team-info-panel">${infoBlock}${fixturesBlock}</div>`;
}

function enableTeamInfoDropdowns(tbodyEl) {
  tbodyEl.querySelectorAll('td.team').forEach(cell => {
    cell.addEventListener('click', () => {
      const row = cell.closest('tr');
      const existing = row.nextElementSibling;
      if (existing && existing.classList.contains('team-info-row')) {
        existing.remove();
        return;
      }
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
    const position = i + 1;
    const tr = document.createElement('tr');
    const zoneClass = (typeof zoneForPosition === 'function') ? zoneForPosition(position) : '';
    if (zoneClass) tr.classList.add(zoneClass);
    tr.innerHTML = `
      <td class="pos">${position}</td>
      <td class="mv">${movementArrow(t.movement)}</td>
      <td class="team"><span class="team-name">${t.team}</span></td>
      <td class="form">${formDotsHTML(t.form)}</td>
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
  fixturesWithResults.forEach(md => {
    const group = document.createElement('div');
    group.className = 'round-group';
    const label = document.createElement('div');
    label.className = 'round-label';
    label.textContent = `Matchday ${md.matchday}` + (md.date ? ` · ${formatDate(md.date)}` : '');
    group.appendChild(label);

    const grid = document.createElement('div');
    grid.className = 'fixture-grid';
    md.matches.forEach(m => {
      const played = m.homeScore !== null && m.homeScore !== undefined && m.awayScore !== null && m.awayScore !== undefined;
      const card = document.createElement('div');
      card.className = 'match-card' + (played ? ' played' : '') + (m.forfeit ? ' forfeit' : '');
      card.innerHTML = `
        ${m.forfeit ? '<div class="forfeit-tag">FORFEIT</div>' : ''}
        <div class="side home">${m.home}</div>
        <div class="score">${played ? `${m.homeScore} - ${m.awayScore}` : 'vs'}</div>
        <div class="side away">${m.away}</div>
      `;
      grid.appendChild(card);
    });
    group.appendChild(grid);
    containerEl.appendChild(group);
  });
}

// ---------- SEASON BANNER ----------
function renderSeasonBanner() {
  const el = document.getElementById('season-banner');
  if (!el || typeof SEASON_INFO === 'undefined' || typeof computeSeasonWindow !== 'function') return;
  const win = computeSeasonWindow(SEASON_INFO);
  el.innerHTML = `
    <div class="season-banner-inner">
      <span class="season-tag">Season ${SEASON_INFO.number}</span>
      <span class="season-phase"><b>League:</b> ${formatDate(win.leagueStart)} – ${formatDate(win.leagueEnd)}</span>
      <span class="season-phase"><b>Cups:</b> ${formatDate(win.cupStart)} – ${formatDate(win.cupEnd)}</span>
      <span class="season-phase"><b>Next season:</b> ${formatDate(win.nextSeasonStart)}</span>
    </div>`;
}
renderSeasonBanner();

// ---------- BUILD DATA ----------
const fixtures = generateFixtures(TEAMS);
// FIXTURES from data.js already carries scores inline — use it directly if present,
// otherwise fall back to a freshly generated blank skeleton.
const fixturesWithResults = (typeof FIXTURES !== 'undefined' && FIXTURES.length) ? FIXTURES : fixtures;
const standings = computeStandingsWithMeta(TEAMS, fixturesWithResults, PREVIOUS_STANDINGS_ORDER);

// ---------- RENDER STANDINGS ----------
renderStandingsInto(document.getElementById('standings-body'), standings);

// ---------- RENDER FIXTURES ----------
renderFixturesInto(
  document.getElementById('fixtures-list'),
  fixturesWithResults,
  'Add teams in data.js to generate fixtures.'
);

// ---------- SUPER CUP ----------
function renderTwoLegCup(containerEl, cup, titleLabel) {
  if (!cup || !cup.active) {
    containerEl.innerHTML = `<div class="empty-state">${titleLabel} kicks off once both teams are confirmed.</div>`;
    return;
  }
  let html = `
    <div class="supercup-banner">
      <h2>${titleLabel}</h2>
      <div class="supercup-teams">${cup.teamA} vs ${cup.teamB}</div>
    </div>
    <div class="fixture-grid">
  `;
  cup.legs.forEach(leg => {
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
  containerEl.innerHTML = html;
}
renderTwoLegCup(document.getElementById('supercup-content'), SUPER_CUP, 'Super Cup');

// ---------- CUPS (eFootballerz Cup, Champions Cup, Conference Cup) ----------
function renderCupRounds(containerEl, cup, emptyMessage) {
  if (!cup || !cup.active || !cup.rounds || cup.rounds.length === 0) {
    containerEl.innerHTML = `<div class="empty-state">${emptyMessage}</div>`;
    return;
  }
  let html = cup.blurb ? `<p style="color:var(--text-dim); font-size:13px; margin-bottom:14px;">${cup.blurb}</p>` : '';
  cup.rounds.forEach(round => {
    html += `<div class="cup-round"><div class="cup-round-label">${round.label}${round.date ? ' · ' + formatDate(round.date) : ''}</div><div class="fixture-grid">`;
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

renderCupRounds(document.getElementById('domesticcup-content'), (typeof DOMESTIC_CUP !== 'undefined') ? DOMESTIC_CUP : null, "The eFootballerz Cup hasn't kicked off yet.");
renderCupRounds(document.getElementById('championscup-content'), (typeof CHAMPIONS_CUP !== 'undefined') ? CHAMPIONS_CUP : null, 'The Champions Cup kicks off once the league phase ends.');
renderCupRounds(document.getElementById('conferencecup-content'), (typeof CONFERENCE_CUP !== 'undefined') ? CONFERENCE_CUP : null, 'The Conference Cup kicks off once the league phase ends.');
renderTwoLegCup(document.getElementById('championssupercup-content'), (typeof CHAMPIONS_SUPER_CUP !== 'undefined') ? CHAMPIONS_SUPER_CUP : null, 'Champions Super Cup');

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

// ---------- WALL OF CHAMPIONS ----------
function renderChampList(elId, list, seasonKey) {
  const el = document.getElementById(elId);
  if (!el) return;
  if (!list || list.length === 0) {
    el.innerHTML = `<div class="empty-state">No champions crowned yet.</div>`;
    return;
  }
  list.slice().reverse().forEach(c => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${c.team}</span><span class="season">${c[seasonKey]}</span>`;
    el.appendChild(li);
  });
}
renderChampList('league-champs', CHAMPIONS.league, 'season');
renderChampList('domesticcup-champs', CHAMPIONS.domesticCup, 'season');
renderChampList('championscup-champs', CHAMPIONS.championsCup, 'season');
renderChampList('conferencecup-champs', CHAMPIONS.conferenceCup, 'season');
renderChampList('supercup-champs', CHAMPIONS.superCup, 'edition');
renderChampList('championssupercup-champs', CHAMPIONS.championsSuperCup, 'edition');


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
