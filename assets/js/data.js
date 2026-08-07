/* ============================================================
   EDIT THIS FILE EACH WEEK. That's it. Refresh index.html.
   ============================================================ */

// 1) YOUR TEAMS (DIVISION 1) — edit names as needed
const TEAMS = [
  "IceyF", "LVDXNO", "Scully03", "Manyora", "W1ZZYUCHIHA",
  "khuseloBusquets", "carelessk3lvin", "Lueelo_lynx", "Mapholoba","swafiscents",
  "Lambo", "StreetwiseFC", "EmperorZoocci", "Muntu19", "Notorious_bZ"
];
// If TEAMS.length is odd, a "BYE" is auto-added — don't add it yourself.
// Relegation zone size is calculated automatically:
//   10-15 teams -> bottom 3 relegated
//   16+ teams   -> bottom 4 relegated

// 2) RESULTS — add one line per match ONCE IT'S PLAYED.
// home/away MUST match names in TEAMS exactly.
// Add "forfeit: true" on a result if the match was awarded on forfeit (no-show, disconnect, etc).
const RESULTS = [
     //Matchday 1
     { round: 1, home: "LVDXNO", away: "Notorious_bZ", homeScore: 1, awayScore: 9 },
	 { round: 1, home: "W1ZZYUCHIHA", away: "StreetwiseFC", homeScore: 2, awayScore: 4 },
	 { round: 1, home: "khuseloBusquets", away: "Lambo", homeScore: 3, awayScore: 5 },
	 { round: 1, home: "Manyora", away: "EmperorZoocci", homeScore: 3, awayScore: 5 },
	 { round: 1, home: "carelessk3lvin", away: "swafiscents", homeScore: 3, awayScore: 0 },
	 { round: 1, home: "Scully03", away: "Muntu19", homeScore: 3, awayScore: 0 },
	 { round: 1, home: "Lueelo_lynx", away: "Mapholoba", homeScore: 0, awayScore: 0 },
	 { round: 1, home: "W1ZZYUCHIHA", away: "StreetwiseFC", homeScore: 2, awayScore: 4 },
	 //Matchday 2
	 { round: 2, home: "StreetwiseFC", away: "Scully03", homeScore: 6, awayScore: 1 },
	 { round: 2, home: "Notorious_bZ", away: "IceyF", homeScore: 2, awayScore: 6 },
     { round: 2, home: "EmperorZoocci", away: "LVDXNO", homeScore: 3, awayScore: 2 },
     { round: 2, home: "Lambo", away: "Manyora", homeScore: 2, awayScore: 1 },
     { round: 2, home: "Lueelo_lynx", away: "carelessk3lvin", homeScore: 12, awayScore: 6 },
     { round: 2, home: "Mapholoba", away: "khuseloBusquets", homeScore: 0, awayScore: 3 },
     { round: 2, home: "swafiscents", away: "W1ZZYUCHIHA", homeScore: 0, awayScore: 3 },
	 //Matchday 3
     { round: 3, home: "khuseloBusquets", away: "carelessk3lvin", homeScore: 8, awayScore: 3 },
	 { round: 3, home: "IceyF", away: "Muntu19", homeScore: 3, awayScore: 0 },
     { round: 3, home: "Notorious_bZ", away: "EmperorZoocci", homeScore: 4, awayScore: 1 },
     { round: 3, home: "W1ZZYUCHIHA", away: "Lueelo_lynx", homeScore: 3, awayScore: 4 },
     { round: 3, home: "LVDXNO", away: "Lambo", homeScore: 0, awayScore: 0 },
     { round: 3, home: "Manyora", away: "Mapholoba", homeScore: 0, awayScore: 0 },
     { round: 3, home: "Scully03", away: "swafiscents", homeScore: 3, awayScore: 0 },
     //Matchday 4	 
	 { round: 4, home: "Lueelo_lynx", away: "Scully03", homeScore: 3, awayScore: 2 },
	 { round: 4, home: "StreetwiseFC", away: "Muntu19", homeScore: 4, awayScore: 3 }, 
	 { round: 4, home: "Lambo", away: "Notorious_bZ", homeScore: 7, awayScore: 2 },
	 { round: 4, home: "EmperorZoocci", away: "IceyF", homeScore: 11, awayScore: 2 },
     { round: 4, home: "Mapholoba", away: "LVDXNO", homeScore: 4, awayScore: 2 },
     { round: 4, home: "carelessk3lvin", away: "Manyora", homeScore: 2 , awayScore: 6 },
     { round: 4, home: "khuseloBusquets", away: "W1ZZYUCHIHA", homeScore: 3, awayScore: 2 }, 
	 //Matchday 5
	 { round: 5, home: "Scully03", away: "khuseloBusquets", homeScore: 2, awayScore: 5 },
	 { round: 5, home: "LVDXNO", away: "carelessk3lvin", homeScore: 4, awayScore: 2 },
	 { round: 5, home: "Notorious_bZ", away: "Mapholoba", homeScore: 1, awayScore: 2 },
	 { round: 5, home: "Manyora", away: "W1ZZYUCHIHA", homeScore: 6, awayScore: 2 },
	 { round: 5, home: "IceyF", away: "StreetwiseFC", homeScore: 3, awayScore: 10 },
	 { round: 5, home: "Muntu19", away: "swafiscents", homeScore: 0, awayScore: 0 },
	 { round: 5, home: "EmperorZoocci", away: "Lambo", homeScore: 9, awayScore: 0 },
	 //Matchday 6
	 { round: 6, home: "carelessk3lvin", away: "Notorious_bZ", homeScore: 1, awayScore: 6 }, 
	 { round: 6, home: "W1ZZYUCHIHA", away: "LVDXNO", homeScore: 5, awayScore: 4 },
	 { round: 6, home: "Mapholoba", away: "EmperorZoocci", homeScore: 3, awayScore: 2 },
	 { round: 6, home: "Manyora", away: "Scully03", homeScore: 5, awayScore: 2 },
	 { round: 6, home: "Lueelo_lynx", away: "Muntu19", homeScore: 3, awayScore: 0 },
	 { round: 6, home: "", away: "", homeScore: null, awayScore: null },
	 { round: 6, home: "", away: "", homeScore: null, awayScore: null },
	 
	 //Matchday 7
	 { round: 7, home: "Muntu19", away: "khuseloBusquets", homeScore: 1, awayScore: 5 },
	 { round: 7, home: "Notorious_bZ", away: "W1ZZYUCHIHA", homeScore: 4, awayScore: 6 },
	 { round: 7, home: "EmperorZoocci", away: "carelessk3lvin", homeScore: 3, awayScore: 4 },
	 { round: 7, home: "Lambo", away: "Mapholoba", homeScore: 0, awayScore: 13 },
	 { round: 7, home: "StreetwiseFC", away: "Lueelo_lynx", homeScore: 4, awayScore: 1 },
	 { round: 7, home: "LVDXNO", away: "Scully03", homeScore: 0, awayScore: 4 },
	 { round: 7, home: "", away: "", homeScore: null, awayScore: null },
	 //Matchday 8
	 { round: 8, home: "Scully03", away: "Notorious_bZ", homeScore: 2, awayScore: 3 },
	 { round: 8, home: "Mapholoba", away: "IceyF", homeScore: 2, awayScore: 4 },
	 { round: 8, home: "", away: "", homeScore: null, awayScore: null },
	 { round: 8, home: "", away: "", homeScore: null, awayScore: null },
	 { round: 8, home: "", away: "", homeScore: null, awayScore: null },
	 { round: 8, home: "", away: "", homeScore: null, awayScore: null },
	 //Matchday 9
	 { round: 9, home: "", away: "", homeScore: null, awayScore: null },
	 { round: 9, home: "", away: "", homeScore: null, awayScore: null },
	 { round: 9, home: "", away: "", homeScore: null, awayScore: null },
	 { round: 9, home: "", away: "", homeScore: null, awayScore: null },
	 { round: 9, home: "", away: "", homeScore: null, awayScore: null },
	 { round: 9, home: "", away: "", homeScore: null, awayScore: null },
	 //Matchday 10
	 //Matchday 11
	 //Matchday 12
	 { round: 12, home: "LVDXNO", away: "Lueelo_lynx", homeScore: 3, awayScore:2},
	 //Matchday 13
	 //Matchday 14
	 //Matchday 15
	 { round: 15, home: "IceyF", away: "LVDXNO", homeScore: 1, awayScore:2}, 
	 //Matchday 16
	 //Matchday 17
	 //Matchday 18
	 //Matchday 19
	 //Matchday 20
	 //Matchday 21
	 {round: 21, home: "LVDXNO", away: "W1ZZYUCHIHA", homeScore: 3, awayScore: 3 },
	 //Matchday 22
	 { round: 22, home: "Scully03", away: "LVDXNO", homeScore: 3, awayScore:1 },
	 //Matchday 23
	 { round: 23, home: "IceyF", away: "Mapholoba", homeScore: 1, awayScore:7 },
	 //Matchday 24
	 //Matchday 25
	 //Matchday 26
	 //Matchday 27
	 { round: 27, home: "Lueelo_lynx", away: "LVDXNO", homeScore: 3, awayScore:2},
	 //Matchday 28
	 //Matchday 29
	 //Matchday 30
	 { round: 30, home: "LVDXNO", away: "IceyF", homeScore: 2, awayScore:2},
	 
];

// 2b) PREVIOUS STANDINGS ORDER — for the up/down/dash movement arrows.
// Each week, BEFORE you add new results: copy the current table order (top to bottom,
// team names only) from the site into this array. Then add the week's results above.
// On refresh, the site compares the new table to this list to show movement.
// Leave empty ([]) if you don't want arrows yet (they'll show "—" for everyone).
const PREVIOUS_STANDINGS_ORDER = [
  "StreetwiseFC","khuseloBusquets","Mapholoba","Lueelo_lynx","EmperorZoocci", "Notorious_bZ",
  "Manyora","Lambo","W1ZZYUCHIHA","IceyF","LVDXNO",
  "Scully03","carelessk3lvin","swafiscents","Muntu19"
];

// 3) SUPER CUP — filled in once top 2 from the DIVISION 1 table are known.
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
    // { season: "Season 1", team: "StreetwiseFC" },
  ],
  superCup: [
    // { edition: "Super Cup 1", team: "Lambo" },
  ],
  division2: [
    // { season: "Div 2 Season 1", team: "SomeTeam" },
  ]
};

/* ============================================================
   DIVISION 2
   Same rules as Division 1: fill TEAMS2 with the new intake,
   log results in RESULTS2 the same way as RESULTS above.

   PROMOTION: #1 in Division 2 goes up automatically.
   #2-#5 play a knockout playoff (set up in PROMOTION_PLAYOFFS
   below) for the remaining 2 promotion spots.
   ============================================================ */

// Leave TEAMS2 empty ([]) until Division 2 is ready to launch.
const TEAMS2 = [
  // "NewPlayer1", "NewPlayer2", ...
];

const RESULTS2 = [
  // { round: 1, home: "", away: "", homeScore: null, awayScore: null },
];

const PREVIOUS_STANDINGS_ORDER2 = [
  // same idea as PREVIOUS_STANDINGS_ORDER, but for Division 2
];

// PROMOTION PLAYOFFS — once the Division 2 season ends, seed 2nd-5th place here.
// #1 is promoted automatically and does NOT appear in this bracket.
// Semis: seed2 vs seed5, seed3 vs seed4. Winners meet in the final for the last promotion spot.
const PROMOTION_PLAYOFFS = {
  active: false,
  seed2: "",
  seed3: "",
  seed4: "",
  seed5: "",
  semis: [
    // { leg: "SF1", home: "", away: "", homeScore: null, awayScore: null }, // seed2 vs seed5
    // { leg: "SF2", home: "", away: "", homeScore: null, awayScore: null }, // seed3 vs seed4
  ],
  final: {
    // home: "", away: "", homeScore: null, awayScore: null
  }
};

// 5) MUSIC PLAYER — drop mp3 files into assets/audio and list them here
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
