/* ============================================================
   EDIT THIS FILE EACH WEEK. That's it. Refresh index.html.
   ============================================================ */

// 1) YOUR 15 TEAMS — edit names/managers as needed
const TEAMS = [
  "IceyF", "LVDXNO", "Scully03", "Manyora", "W1ZZYUCHIHA",
  "khuseloBusquets", "carelessk3lvin", "Lueelo_lynx", "duke44", "swafiscents",
  "Rommy", "StreetwiseFC", "EmperorZoocci", "Muntu19", "Notorious_bZ"
];
// If TEAMS.length is odd, a "BYE" is auto-added — don't add it yourself.

// 2) RESULTS — add one line per match ONCE IT'S PLAYED.
// round = matchweek number (1, 2, 3...). Leave scores as null until played.
// home/away MUST match names in TEAMS exactly.
const RESULTS = [
     { round: 1, home: "LVDXNO", away: "Notorious_bZ", homeScore: 1, awayScore: 9 },
	 { round: 1, home: "W1ZZYUCHIHA", away: "StreetwiseFC", homeScore: 2, awayScore: 4 },
  // { round: 1, home: "Barcelona", away: "Liverpool", homeScore: null, awayScore: null },
];

// 3) SUPER CUP — filled in once top 2 from the league table are known.
// leg: 1 or 2. Leave scores null until played.
const SUPER_CUP = {
  active: false,           // set true once you're ready to kick off the Super Cup
  teamA: "",               // top of the table
  teamB: "",               // runner-up
  legs: [
    // { leg: 1, home: "", away: "", homeScore: null, awayScore: null },
    // { leg: 2, home: "", away: "", homeScore: null, awayScore: null },
  ]
};

// 4) WALL OF CHAMPIONS — add a line every time a season/edition wraps up
const CHAMPIONS = {
  league: [
    // { season: "Season 1", team: "Real Madrid" },
  ],
  superCup: [
    // { edition: "Super Cup 1", team: "Man City" },
  ]
};

// 5) MUSIC PLAYER — drop mp3 files into assets/audio/ and list them here
const TRACKS = [
     { title: "Wash Away", artist: "Balming Tiger", src: "audio/washaway.mp3" },
     { title: "Real Love", artist: "Childish Gambino", src: "audio/reallove.mp3" },
	 { title: "Energy", artist: "Charlie Bereal", src: "audio/energy.mp3" },
     { title: "We Made It", artist: "Circa Waves", src: "audio/wemadeit.mp3" },
	 { title: "Feeling Alive", artist: "Jayda G", src: "audio/feelingalive.mp3" },
     { title: "No Bad Energy", artist: "Miraa May", src: "audio/nobadenergy.mp3" },
	 { title: "Build It Up", artist: "Franz Fedinhand", src: "audio/builditup.mp3" },
     { title: "Never Walk Alone", artist: "Choplife SoundSystem", src: "audio/neverwalkalone.mp3" }
	 
];
