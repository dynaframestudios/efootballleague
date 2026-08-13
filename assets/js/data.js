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
	 { round: 1, home: "carelessk3lvin", away: "swafiscents", homeScore: 3, awayScore: 0, forfeit: true },
	 { round: 1, home: "Scully03", away: "Muntu19", homeScore: 3, awayScore: 0 ,forfeit: true },
	 { round: 1, home: "Lueelo_lynx", away: "Mapholoba", homeScore: 0, awayScore: 0, forfeit: true },
	 { round: 1, home: "W1ZZYUCHIHA", away: "StreetwiseFC", homeScore: 2, awayScore: 4 },
	 //Matchday 2
	 { round: 2, home: "StreetwiseFC", away: "Scully03", homeScore: 6, awayScore: 1 },
	 { round: 2, home: "Notorious_bZ", away: "IceyF", homeScore: 2, awayScore: 6 },
     { round: 2, home: "EmperorZoocci", away: "LVDXNO", homeScore: 3, awayScore: 2 },
     { round: 2, home: "Lambo", away: "Manyora", homeScore: 2, awayScore: 1 },
     { round: 2, home: "Lueelo_lynx", away: "carelessk3lvin", homeScore: 12, awayScore: 6 },
     { round: 2, home: "Mapholoba", away: "khuseloBusquets", homeScore: 0, awayScore: 3 ,forfeit: true },
     { round: 2, home: "swafiscents", away: "W1ZZYUCHIHA", homeScore: 0, awayScore: 3, forfeit: true },
	 //Matchday 3
     { round: 3, home: "khuseloBusquets", away: "carelessk3lvin", homeScore: 8, awayScore: 3 },
	 { round: 3, home: "IceyF", away: "Muntu19", homeScore: 3, awayScore: 0 ,forfeit: true },
     { round: 3, home: "Notorious_bZ", away: "EmperorZoocci", homeScore: 4, awayScore: 1 },
     { round: 3, home: "W1ZZYUCHIHA", away: "Lueelo_lynx", homeScore: 3, awayScore: 4 },
     { round: 3, home: "LVDXNO", away: "Lambo", homeScore: 0, awayScore: 0, forfeit: true},
     { round: 3, home: "Manyora", away: "Mapholoba", homeScore: 0, awayScore: 0, forfeit: true },
     { round: 3, home: "Scully03", away: "swafiscents", homeScore: 3, awayScore: 0, forfeit: true },
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
	 { round: 5, home: "Muntu19", away: "swafiscents", homeScore: 0, awayScore: 0, forfeit: true },
	 { round: 5, home: "EmperorZoocci", away: "Lambo", homeScore: 9, awayScore: 0 },
	 //Matchday 6
	 { round: 6, home: "carelessk3lvin", away: "Notorious_bZ", homeScore: 1, awayScore: 6 }, 
	 { round: 6, home: "W1ZZYUCHIHA", away: "LVDXNO", homeScore: 5, awayScore: 4 },
	 { round: 6, home: "Mapholoba", away: "EmperorZoocci", homeScore: 3, awayScore: 2 },
	 { round: 6, home: "Manyora", away: "Scully03", homeScore: 5, awayScore: 2 },
	 { round: 6, home: "Lueelo_lynx", away: "Muntu19", homeScore: 3, awayScore: 0 },
	 { round: 6, home: "Lambo", away: "IceyF", homeScore: 0, awayScore: 0,forfeit: true  },
	 { round: 6, home: "swafiscents", away: "StreetwiseFC", homeScore: 3, awayScore: 8},
	 
	 //Matchday 7
	 { round: 7, home: "Muntu19", away: "khuseloBusquets", homeScore: 1, awayScore: 5 },
	 { round: 7, home: "Notorious_bZ", away: "W1ZZYUCHIHA", homeScore: 4, awayScore: 6 },
	 { round: 7, home: "EmperorZoocci", away: "carelessk3lvin", homeScore: 3, awayScore: 4 },
	 { round: 7, home: "Lambo", away: "Mapholoba", homeScore: 0, awayScore: 13 },
	 { round: 7, home: "StreetwiseFC", away: "Lueelo_lynx", homeScore: 4, awayScore: 1 },
	 { round: 7, home: "LVDXNO", away: "Scully03", homeScore: 0, awayScore: 4 },
	 { round: 7, home: "IceyF", away: "swafiscents", homeScore: 0, awayScore: 0, forfeit: true },
	 //Matchday 8
	 { round: 8, home: "Scully03", away: "Notorious_bZ", homeScore: 2, awayScore: 3 },
	 { round: 8, home: "Mapholoba", away: "IceyF", homeScore: 2, awayScore: 4 },
	 { round: 8, home: "carelessk3lvin", away: "Lambo", homeScore: 1, awayScore: 9 },
	 { round: 8, home: "khuseloBusquets", away: "StreetwiseFC", homeScore: 2, awayScore: 4 },
	 { round: 8, home: "W1ZZYUCHIHA", away: "EmperorZoocci", homeScore: 3, awayScore: 4 },
	 { round: 8, home: "Lueelo_lynx", away: "swafiscents", homeScore: 0, awayScore: 0, forfeit: true  },
	 { round: 8, home: "Manyora", away: "Muntu19", homeScore: 3, awayScore: 0, forfeit: true },
	 //Matchday 9
	 { round: 9, home: "IceyF", away: "Lueelo_lynx", homeScore: 5, awayScore: 2 },
	 { round: 9, home: "Muntu19", away: "LVDXNO", homeScore: 0, awayScore: 3, forfeit: true },
	 { round: 9, home: "Lambo", away: "W1ZZYUCHIHA", homeScore: 4, awayScore: 2 },
	 { round: 9, home: "swafiscents", away: "khuseloBusquets", homeScore: 2, awayScore: 1 },
	 { round: 9, home: "EmperorZoocci", away: "Scully03", homeScore: 1, awayScore: 0 },
	 { round: 9, home: "Mapholoba", away: "carelessk3lvin", homeScore: 9, awayScore: 4 },
	 { round: 9, home: "", away: "", homeScore: null, awayScore: null },
	 //Matchday 10
	 { round: 10, home: "khuseloBusquets", away: "Lueelo_lynx", homeScore: 7, awayScore: 5 },
	 { round: 10, home: "Notorious_bZ", away: "Muntu19", homeScore: 3, awayScore: 0, forfeit: true },
	 { round: 10, home: "LVDXNO", away: "StreetwiseFC", homeScore: 0, awayScore: 10 },
	 { round: 10, home: "W1ZZYUCHIHA", away: "Mapholoba", homeScore: 3, awayScore: 3 },
	 { round: 10, home: "Scully03", away: "Lambo", homeScore: 4, awayScore: 7 },
	 { round: 10, home: "", away: "", homeScore: null, awayScore: null },
	 { round: 10, home: "", away: "", homeScore: null, awayScore: null },
	 //Matchday 11
	 { round: 11, home: "IceyF", away: "khuseloBusquets", homeScore: 2, awayScore: 6 },
	 { round: 11, home: "EmperorZoocci", away: "Muntu19", homeScore: 3, awayScore: 0, forfeit: true },
	 { round: 11, home: "carelessk3lvin", away: "W1ZZYUCHIHA", homeScore: 0, awayScore: 7 },
	 { round: 11, home: "Scully03", away: "Mapholoba", homeScore: 2, awayScore: 6 },
	 //Matchday 12
	 { round: 12, home: "LVDXNO", away: "Lueelo_lynx", homeScore: 3, awayScore:2},
	 { round: 12, home: "Muntu19", away: "Lambo", homeScore: 0, awayScore: 3, forfeit: true },
	 { round: 12, home: "Manyora", away: "khuseloBusquets", homeScore: 3, awayScore: 0 },
	 //Matchday 13
	 { round: 13, home: "W1ZZYUCHIHA", away: "Scully03", homeScore: 6, awayScore: 3 },
	 { round: 13, home: "khuseloBusquets", away: "LVDXNO", homeScore: 6, awayScore: 2 },
	 { round: 13, home: "Mapholoba", away: "Muntu19", homeScore: 3, awayScore: 0, forfeit: true },
	 //Matchday 14
	 { round: 14, home: "Muntu19", away: "carelessk3lvin", homeScore: 0, awayScore: 3, forfeit: true },
	 { round: 14, home: "StreetwiseFC", away: "Mapholoba", homeScore: 4, awayScore: 4 },
	 { round: 14, home: "Notorious_bZ", away: "khuseloBusquets", homeScore: 2, awayScore: 3 },
	 //Matchday 15
	 { round: 15, home: "IceyF", away: "LVDXNO", homeScore: 1, awayScore:2}, 
	 { round: 15, home: "W1ZZYUCHIHA", away: "Muntu19", homeScore: 3, awayScore: 0, forfeit: true },
	 
	 //=====Second Half of Season======
	 
	 //Matchday 16
	 { round: 16, home: "Muntu19", away: "Scully03", homeScore: 0, awayScore: 3, forfeit: true },
	 { round: 16, home: "StreetwiseFC", away: "W1ZZYUCHIHA", homeScore: 4, awayScore: 4 },
	 //Matchday 17
	 { round: 17, home: "LVDXNO", away: "EmperorZoocci", homeScore: 1, awayScore: 5 },
	 { round: 17, home: "W1ZZYUCHIHA", away: "swafiscents", homeScore: 7, awayScore: 2 },
	 //Matchday 18
	 { round: 18, home: "Muntu19", away: "IceyF", homeScore: 0, awayScore: 3, forfeit: true },
	 { round: 18, home: "Lueelo_lynx", away: "W1ZZYUCHIHA", homeScore: 8, awayScore: 1 },
	 { round: 18, home: "Lambo", away: "LVDXNO", homeScore: 10, awayScore: 2 },
	 { round: 18, home: "carelessk3lvin", away: "khuseloBusquets", homeScore: 5, awayScore: 6 },
	 //Matchday 19
	 { round: 19, home: "Muntu19", away: "StreetwiseFC", homeScore: 0, awayScore: 3, forfeit: true },
	 //Matchday 20
	 { round: 20, home: "swafiscents", away: "Muntu19", homeScore: 3, awayScore: 0, forfeit: true },
	 { round: 20, home: "carelessk3lvin", away: "LVDXNO", homeScore: 8, awayScore: 1 },
	 { round: 20, home: "W1ZZYUCHIHA", away: "Manyora", homeScore: 4, awayScore: 4 },
	 //Matchday 21
	 { round: 21, home: "LVDXNO", away: "W1ZZYUCHIHA", homeScore: 3, awayScore: 3 },
	 { round: 21, home: "IceyF", away: "Lambo", homeScore: 1, awayScore: 2 },
	 { round: 21, home: "Muntu19", away: "Lueelo_lynx", homeScore: 0, awayScore: 3, forfeit: true },
	 //Matchday 22
	 { round: 22, home: "Scully03", away: "LVDXNO", homeScore: 3, awayScore:1 },
	 { round: 22, home: "Mapholoba", away: "Lambo", homeScore: 7, awayScore:3 },
	 { round: 22, home: "khuseloBusquets", away: "Muntu19", homeScore: 3, awayScore: 0, forfeit: true },
	 { round: 25, home: "carelessk3lvin", away: "EmperorZoocci", homeScore: 4, awayScore: 6 },
	 //Matchday 23
	 { round: 23, home: "IceyF", away: "Mapholoba", homeScore: 1, awayScore:7 },
	 { round: 23, home: "StreetwiseFC", away: "khuseloBusquets", homeScore: 5, awayScore:4 },
	 { round: 23, home: "Muntu19", away: "Manyora", homeScore: 0, awayScore: 3, forfeit: true },
	 //Matchday 24
	 { round: 24, home: "LVDXNO", away: "Muntu19", homeScore: 3, awayScore: 0, forfeit: true },
	 { round: 24, home: "W1ZZYUCHIHA", away: "Lambo", homeScore: 3, awayScore: 4 },
	 { round: 24, home: "khuseloBusquets", away: "swafiscents", homeScore: 5, awayScore: 2 },
	 { round: 24, home: "Lueelo_lynx", away: "IceyF", homeScore: 0, awayScore: 3 },
	 { round: 24, home: "carelessk3lvin", away: "Mapholoba", homeScore: 1, awayScore: 11 },
	 //Matchday 25
	 { round: 25, home: "Muntu19", away: "Notorious_bZ", homeScore: 0, awayScore: 3, forfeit: true },
	 { round: 25, home: "Lueelo_lynx", away: "khuseloBusquets", homeScore: 0, awayScore: 5 },
	 { round: 25, home: "Mapholoba", away: "W1ZZYUCHIHA", homeScore: 7, awayScore: 6 },
	 { round: 25, home: "StreetwiseFC", away: "LVDXNO", homeScore: 8, awayScore: 1 },
	 { round: 25, home: "Lambo", away: "Scully03", homeScore: 2, awayScore: 3 },
	 //Matchday 26
	 { round: 26, home: "Muntu19", away: "EmperorZoocci", homeScore: 0, awayScore: 3, forfeit: true },
	 { round: 26, home: "khuseloBusquets", away: "IceyF", homeScore: 9, awayScore: 1 },
	 { round: 26, home: "W1ZZYUCHIHA", away: "carelessk3lvin", homeScore: 8, awayScore: 4 },
	 { round: 26, home: "Mapholoba", away: "Scully03", homeScore: 5, awayScore: 2 },
	 //Matchday 27
	 { round: 27, home: "Lambo", away: "Muntu19", homeScore: 3, awayScore: 0, forfeit: true },
	 { round: 27, home: "Lueelo_lynx", away: "LVDXNO", homeScore: 3, awayScore:2},
	 //Matchday 28
	 { round: 28, home: "Muntu19", away: "Mapholoba", homeScore: 0, awayScore: 3, forfeit: true },
	 { round: 28, home: "Scully03", away: "W1ZZYUCHIHA", homeScore: 3, awayScore: 4 },
	 { round: 28, home: "LVDXNO", away: "khuseloBusquets", homeScore: 1, awayScore: 6 },
	 //Matchday 29
	 { round: 29, home: "carelessk3lvin", away: "Muntu19", homeScore: 3, awayScore: 0, forfeit: true },
	 { round: 29, home: "Mapholoba", away: "StreetwiseFC", homeScore: 4, awayScore: 3 },
	 //Matchday 30
	 { round: 30, home: "Muntu19", away: "W1ZZYUCHIHA", homeScore: 0, awayScore: 3, forfeit: true },
	 { round: 30, home: "LVDXNO", away: "IceyF", homeScore: 2, awayScore:2},
	 
];

// 2b) PREVIOUS STANDINGS ORDER — LEGACY / OPTIONAL.
// Movement arrows are now AUTOMATIC: the engine works out last matchday's
// table on its own from whatever's in RESULTS. You do NOT need to touch
// this array anymore — just leave it as [] and add results as normal.
// (It's only kept around in case you ever want to force a specific
// baseline — if you fill it in, it overrides the automatic calculation.)
const PREVIOUS_STANDINGS_ORDER = [];

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

// 4) WALL OF CHAMPIONS — add a line every time a season/edition wraps up.
// NOTE on Super Cup: Season 1 it's contested by the top 2 of Division 1.
// From Season 2 onward it's the #1 of Division 1 vs the #1 of Division 2.
const CHAMPIONS = {
  league: [
    // { season: "Season 1", team: "StreetwiseFC" },
  ],
  domesticCup: [
    // { season: "Season 1", team: "Lambo" },
  ],
  top4Cup: [
    // { season: "Season 1", team: "Lambo" },
  ],
  superCup: [
    // { edition: "Super Cup 1", team: "Lambo" },
  ],
  division2: [
    // { season: "Div 2 Season 1", team: "LVDXNO" },
  ]
};

/* ============================================================
   CUPS — Domestic Cup (open knockout) and Top 4 Cup (finishers
   1st-4th in Division 1 at end of season). Same bracket shape as
   PROMOTION_PLAYOFFS: fill in rounds as they're drawn/played.
   Add/remove rounds freely — the rounds array just renders in order.
   ============================================================ */

const DOMESTIC_CUP = {
  active: false,
  name: "Domestic Cup",
  rounds: [
    // {
    //   label: "Round of 16",
    //   matches: [
    //     { home: "", away: "", homeScore: null, awayScore: null },
    //   ]
    // },
  ]
};

const TOP4_CUP = {
  active: false,
  name: "Top 4 Cup",
  blurb: "Contested by the top 4 finishers in the Division 1 table at the end of the season.",
  rounds: [
    // {
    //   label: "Semi-Finals",
    //   matches: [
    //     { home: "", away: "", homeScore: null, awayScore: null }, // 1st vs 4th
    //     { home: "", away: "", homeScore: null, awayScore: null }, // 2nd vs 3rd
    //   ]
    // },
    // {
    //   label: "Final",
    //   matches: [
    //     { home: "", away: "", homeScore: null, awayScore: null },
    //   ]
    // },
  ]
};

/* ============================================================
   TEAM INFO — powers the tap-to-expand info dropdown on team
   names in the standings tables. Key MUST match the team name
   exactly as used in TEAMS / TEAMS2. Any team without an entry
   here just won't expand (safe to add these gradually).
   ============================================================ */

const TEAM_INFO = {
  // "IceyF": {
  //   playstyle: "Possession / Tiki-Taka",
  //   highestDivision: "Division 1",
  //   manager: "IceyF",
  //   user: "IceyF",
  //   titles: 0
  // },
   // "StreetwiseFC": {
  //   playstyle: "Possession / Tiki-Taka",
  //   highestDivision: "Division 1",
  //   manager: "IceyF",
  //   user: "IceyF",
  //   titles: 0
  // },
   // "khuseloBusquets": {
  //   playstyle: "Possession / Tiki-Taka",
  //   highestDivision: "Division 1",
  //   manager: "IceyF",
  //   user: "IceyF",
  //   titles: 0
  // },
  // "Lambo": {
  //   playstyle: "Possession / Tiki-Taka",
  //   highestDivision: "Division 1",
  //   manager: "IceyF",
  //   user: "IceyF",
  //   titles: 0
  // },
     "LVDXNO": {
      playstyle: "Possession / Tiki-Taka",
      highestDivision: "Division 1",
      manager: "Frank Lampard/Cesc Fasegas/ P Kliuvert",
      user: "Don Ladino",
      titles: 0
     },
   // "Lueelo_lynx": {
  //   playstyle: "Possession / Tiki-Taka",
  //   highestDivision: "Division 1",
  //   manager: "IceyF",
  //   user: "IceyF",
  //   titles: 0
  // },
  // "Scully03": {
  //   playstyle: "Possession / Tiki-Taka",
  //   highestDivision: "Division 1",
  //   manager: "IceyF",
  //   user: "IceyF",
  //   titles: 0
  // },
   // "carelessk3lvin": {
  //   playstyle: "Possession / Tiki-Taka",
  //   highestDivision: "Division 1",
  //   manager: "IceyF",
  //   user: "IceyF",
  //   titles: 0
  // },
   // "Manyora": {
  //   playstyle: "Possession / Tiki-Taka",
  //   highestDivision: "Division 1",
  //   manager: "IceyF",
  //   user: "IceyF",
  //   titles: 0
  // },
  // "Mapholoba": {
  //   playstyle: "Possession / Tiki-Taka",
  //   highestDivision: "Division 1",
  //   manager: "IceyF",
  //   user: "IceyF",
  //   titles: 0
  // },
   // "Notorious_bZ": {
  //   playstyle: "Possession / Tiki-Taka",
  //   highestDivision: "Division 1",
  //   manager: "IceyF",
  //   user: "IceyF",
  //   titles: 0
  // },
   // "W1ZZYUCHIHA": {
  //   playstyle: "Possession / Tiki-Taka",
  //   highestDivision: "Division 1",
  //   manager: "IceyF",
  //   user: "IceyF",
  //   titles: 0
  // },
  // "swafiscents": {
  //   playstyle: "Possession / Tiki-Taka",
  //   highestDivision: "Division 1",
  //   manager: "IceyF",
  //   user: "IceyF",
  //   titles: 0
  // },
   // "Rommy": {
  //   playstyle: "Possession / Tiki-Taka",
  //   highestDivision: "Division 1",
  //   manager: "IceyF",
  //   user: "IceyF",
  //   titles: 0
  // },
   // "": {
  //   playstyle: "Possession / Tiki-Taka",
  //   highestDivision: "Division 1",
  //   manager: "IceyF",
  //   user: "IceyF",
  //   titles: 0
  // },
  // "": {
  //   playstyle: "Possession / Tiki-Taka",
  //   highestDivision: "Division 1",
  //   manager: "IceyF",
  //   user: "IceyF",
  //   titles: 0
  // },
   // "": {
  //   playstyle: "Possession / Tiki-Taka",
  //   highestDivision: "Division 1",
  //   manager: "IceyF",
  //   user: "IceyF",
  //   titles: 0
  // },
   // "IceyF": {
  //   playstyle: "Possession / Tiki-Taka",
  //   highestDivision: "Division 1",
  //   manager: "IceyF",
  //   user: "IceyF",
  //   titles: 0
  // },
};

/* ============================================================
   REGULATIONS — plain text/HTML content for the Regulations tab.
   Each entry is a section with a heading and body. Body supports
   basic HTML (use <br> for line breaks, <ul><li> for lists).
   ============================================================ */

const REGULATIONS = [
  {
    heading: "League Format",
    body: "These are the rules and regulations set by Don Infantino: Smart Assist: OFF.    Match settings: Both teams set to Excellent Conditions before match. IF NOT, match will be restarted set to correct conditions. Max Subs and Intervals.   Match Duration:10 minutes, Match Times: Matchdays will have dates from the second season above fixtures with the time limit as to allow for the table updates to occur during downtime.   Friendlies are allowed after league matches period or before."
  },
  {
    heading: "Qualification — League Title",
    body: "Top of the Division 1 table at the end of the season."
  },
  {
    heading: "Qualification — Domestic Cup",
    body: "Open knockout cup — No fancy jargon, all participants can join this cup."
  },
  {
    heading: "Qualification — CHAMPIONS Cup",
    body: "Contested by the teams that finish 1st-4th in Division 1 at the end of the season."
  },
  {
    heading: "Qualification — Super Cup",
    body: "Season 1: contested by the top 2 in the Division 1 table.<br>From Season 2: contested by the Division 1 champion vs the Division 2 champion."
  },
  {
    heading: "Qualification — Division 2 Title & Promotion",
    body: "1st place in Division 2 is promoted automatically. 2nd-5th play a knockout playoff for the remaining 2 promotion spots."
  },
  {
    heading: "Relegation",
    body: "10-15 teams in a division: bottom 3 are relegated. 16+ teams: bottom 4 are relegated."
  },
  {
    heading: "Match Scheduling & Forfeits",
    body: "After those times, match is a draw on both competing teams on both home and away legs given both did not reach out, however if you reach out and your opponent does not respond, then its a 3-0 win for you in both home and away legs.  If a player has an emergency(family, work, school, network) they should communicate prior to the close of the matchday to avoid unfair forfeits (Grace Period is 3 matches max(3 days), if you exceed the 3 match reschedule you will draw 0-0 all those the matches and you will count as a non- responding player and will be subject to the Forfeit clause)  If a player is suspected of using SMART ASSIST, they will be subject to a 10 point deduction at the end of the season if multiple offences ensure then immediate relegation or explusion from the league will be put to a vote. "
  }
];

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
  "Relegation1", "Relegation2", "Relegation3",
  "Rommy", "Thee_H1MOTHY", "NewPlayer6", "NewPlayer7", "NewPlayer8", 
  "NewPlayer9", "NewPlayer10", "NewPlayer11", "NewPlayer12",
  "NewPlayer13", "NewPlayer14", "NewPlayer15"
];

const RESULTS2 = [
  // { round: 1, home: "", away: "", homeScore: null, awayScore: null },
];

const PREVIOUS_STANDINGS_ORDER2 = [
  // legacy/optional, same as PREVIOUS_STANDINGS_ORDER above — arrows are automatic now.
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
     { title: "Many People", artist: "Adekunle Gold", src: "audio/manypeople.mp3" },
     { title: "Lalala", artist: "Young John & Rema", src: "audio/lalala.mp3" },
	 { title: "404 (New Era)", artist: "KiiKii", src: "audio/404.mp3" },
     { title: "Walk Walk Walk", artist: "Good Neighbours", src: "audio/walkwalkwalk.mp3" },
	 { title: "Euphoria", artist: "Talia Ray", src: "audio/euphoria.mp3" },
     { title: "Dopamine", artist: "Robyn", src: "audio/dopamine.mp3" }
	 
	 
];
