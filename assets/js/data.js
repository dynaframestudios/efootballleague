/* ============================================================
   EDIT THIS FILE EACH WEEK. That's it. Refresh index.html.
   ============================================================ */

// 1) YOUR 15 TEAMS — edit names/managers as needed
const TEAMS = [
  "IceyF", "LVDXNO", "Scully03", "Manyora", "W1ZZYUCHIHA",
  "khuseloBusquets", "carelessk3lvin", "Lueelo_lynx", "Mapholoba","swafiscents",
  "patient_zer0", "StreetwiseFC", "EmperorZoocci", "Muntu19", "Notorious_bZ"
];
// If TEAMS.length is odd, a "BYE" is auto-added — don't add it yourself.

// 2) RESULTS — add one line per match ONCE IT'S PLAYED.
// home/away MUST match names in TEAMS exactly.
const RESULTS = [
     //Matchday 1
     { round: 1, home: "LVDXNO", away: "Notorious_bZ", homeScore: 1, awayScore: 9 },
	 { round: 1, home: "W1ZZYUCHIHA", away: "StreetwiseFC", homeScore: 2, awayScore: 4 },
	 { round: 1, home: "khuseloBusquets", away: "patient_zer0", homeScore: 3, awayScore: 5 },
	 { round: 1, home: "Manyora", away: "EmperorZoocci", homeScore: 3, awayScore: 5 },
	 { round: 1, home: "carelessk3lvin", away: "swafiscents", homeScore: 3, awayScore: 0 },
	 { round: 1, home: "Scully03", away: "Muntu19", homeScore: 3, awayScore: 0 },
	 { round: 1, home: "Lueelo_lynx", away: "Mapholoba", homeScore: 0, awayScore: 0 },
	 { round: 1, home: "W1ZZYUCHIHA", away: "StreetwiseFC", homeScore: 2, awayScore: 4 },
	 //Matchday 2
	 { round: 2, home: "StreetwiseFC", away: "Scully03", homeScore: 6, awayScore: 1 },
	 { round: 2, home: "Notorious_bZ", away: "IceyF", homeScore: 2, awayScore: 6 },
     { round: 2, home: "EmperorZoocci", away: "LVDXNO", homeScore: 3, awayScore: 2 },
     { round: 2, home: "patient_zer0", away: "Manyora", homeScore: 2, awayScore: 1 },
     { round: 2, home: "Lueelo_lynx", away: "carelessk3lvin", homeScore: 12, awayScore: 6 },
     { round: 2, home: "Mapholoba", away: "khuseloBusquets", homeScore: 0, awayScore: 3 },
     { round: 2, home: "swafiscents", away: "W1ZZYUCHIHA", homeScore: 0, awayScore: 3 },
	 //Matchday 3
     { round: 3, home: "khuseloBusquets", away: "carelessk3lvin", homeScore: 8, awayScore: 3 },
	 { round: 3, home: "IceyF", away: "Muntu19", homeScore: 3, awayScore: 0 },
     { round: 3, home: "Notorious_bZ", away: "EmperorZoocci", homeScore: 4, awayScore: 1 },
     { round: 3, home: "W1ZZYUCHIHA", away: "Lueelo_lynx", homeScore: 3, awayScore: 4 },
     { round: 3, home: "LVDXNO", away: "patient_zer0", homeScore: 0, awayScore: 0 },
     { round: 3, home: "Manyora", away: "Mapholoba", homeScore: 0, awayScore: 0 },
     { round: 3, home: "Scully03", away: "swafiscents", homeScore: 3, awayScore: 0 },
     //Matchday 4	 
	 { round: 4, home: "Lueelo_lynx", away: "Scully03", homeScore: 3, awayScore: 2 },
	 { round: 4, home: "StreetwiseFC", away: "Muntu19", homeScore: 4, awayScore: 3 }, 
	// { round: 4, home: "Lueelo_lynx", away: "Scully03", homeScore: , awayScore:  },
	 { round: 4, home: "EmperorZoocci", away: "IceyF", homeScore: 11, awayScore: 2 },
     { round: 4, home: "Mapholoba", away: "LVDXNO", homeScore: 4, awayScore: 2 },
     { round: 4, home: "carelessk3lvin", away: "Manyora", homeScore: 2 , awayScore: 6 },
     { round: 4, home: "khuseloBusquets", away: "W1ZZYUCHIHA", homeScore: 3, awayScore: 2 }, 
	 //Matchday 5
	 { round: 5, home: "Scully03", away: "khuseloBusquets", homeScore: 2, awayScore: 5 },
	 { round: 5, home: "Notorious_bZ", away: "Mapholoba", homeScore: 1, awayScore: 2 },
	 { round: 5, home: "IceyF", away: "StreetwiseFC", homeScore: 3, awayScore: 10 },
	 //Matchday 6
	 { round: 6, home: "carelessk3lvin", away: "Notorious_bZ", homeScore: 1, awayScore: 6 }, 
	 { round: 6, home: "W1ZZYUCHIHA", away: "LVDXNO", homeScore: 5, awayScore: 4 },
	 { round: 6, home: "Mapholoba", away: "EmperorZoocci", homeScore: 3, awayScore: 2 },
	 //Matchday 7
	 //Matchday 8
	 //Matchday 9
	 //Matchday 10
	 //Matchday 11
	 //Matchday 12
	 //Matchday 13
	 //Matchday 14
	 //Matchday 15
	 //Matchday 16
	 //Matchday 17
	 //Matchday 18
	 //Matchday 19
	 //Matchday 20
	 //Matchday 21
	 //Matchday 22
	 //Matchday 23
	 //Matchday 24
	 //Matchday 25
	 //Matchday 26
	 //Matchday 27
	 //Matchday 28
	 //Matchday 29
	 //Matchday 30
	 
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
