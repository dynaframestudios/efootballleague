// ---------- TAB SWITCHING ----------
document.querySelectorAll('nav.tabs button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('nav.tabs button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('section.view').forEach(v => v.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('view-' + btn.dataset.view).classList.add('active');
  });
});

// ---------- BUILD DATA ----------
const fixtures = generateFixtures(TEAMS);
const fixturesWithResults = attachResults(fixtures, RESULTS);
const standings = computeStandings(TEAMS, fixturesWithResults);

// ---------- RENDER STANDINGS ----------
const standingsBody = document.getElementById('standings-body');
standings.forEach((t, i) => {
  const tr = document.createElement('tr');
  if (i < 2) tr.classList.add('top2');
  tr.innerHTML = `
    <td class="pos">${i + 1}</td>
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
  standingsBody.appendChild(tr);
});

// ---------- RENDER FIXTURES ----------
const fixturesList = document.getElementById('fixtures-list');
if (fixturesWithResults.every(r => r.matches.length === 0)) {
  fixturesList.innerHTML = `<div class="empty-state">Add teams in data.js to generate fixtures.</div>`;
} else {
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
      card.className = 'match-card' + (m.played ? ' played' : '');
      card.innerHTML = `
        <div class="side home">${m.home}</div>
        <div class="score">${m.played ? `${m.homeScore} - ${m.awayScore}` : 'vs'}</div>
        <div class="side away">${m.away}</div>
      `;
      grid.appendChild(card);
    });
    group.appendChild(grid);
    fixturesList.appendChild(group);
  });
}

// ---------- RENDER SUPER CUP ----------
const supercupContent = document.getElementById('supercup-content');
if (!SUPER_CUP.active) {
  supercupContent.innerHTML = `<div class="empty-state">The Super Cup kicks off once the top 2 finish the league season. Set SUPER_CUP.active = true in data.js when ready.</div>`;
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

// ---------- RENDER WALL OF CHAMPIONS ----------
const leagueChampsEl = document.getElementById('league-champs');
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

if (TRACKS.length > 0) loadTrack(0);

playBtn.addEventListener('click', () => {
  if (TRACKS.length === 0) return;
  if (isPlaying) { audioEl.pause(); playBtn.textContent = '▶'; }
  else { audioEl.play(); playBtn.textContent = '⏸'; }
  isPlaying = !isPlaying;
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
