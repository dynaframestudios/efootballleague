/* ============================================================
   EDIT THIS FILE EACH WEEK. That's it. Refresh index.html.
   ============================================================ */

// 1) YOUR TEAMS (DIVISION 1) — edit names as needed
const TEAMS = [
  "Dont Worry", "Heathens United", "Intra FC", "Manyora", "Busby Babes",
  "ATTACKERS", "Spartanburg FC", "STRZ", "sfundo FC","Sabah FC ",
  "Danger FC", "StreetwiseFC", "Madoda FC", "Muntu19", "Notorious_bZ"
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
     { round: 1, home: "Heathens United", away: "Notorious_bZ", homeScore: 1, awayScore: 9 },
	 { round: 1, home: "Busby Babes", away: "StreetwiseFC", homeScore: 2, awayScore: 4 },
	 { round: 1, home: "ATTACKERS", away: "Danger FC", homeScore: 3, awayScore: 5 },
	 { round: 1, home: "Manyora", away: "Madoda FC", homeScore: 3, awayScore: 5 },
	 { round: 1, home: "Spartanburg FC", away: "Sabah FC ", homeScore: 3, awayScore: 0, forfeit: true },
	 { round: 1, home: "Intra FC", away: "Muntu19", homeScore: 3, awayScore: 0 ,forfeit: true },
	 { round: 1, home: "STRZ", away: "sfundo FC", homeScore: 0, awayScore: 0, forfeit: true },
	 { round: 1, home: "Busby Babes", away: "StreetwiseFC", homeScore: 2, awayScore: 4 },
	 //Matchday 2
	 { round: 2, home: "StreetwiseFC", away: "Intra FC", homeScore: 6, awayScore: 1 },
	 { round: 2, home: "Notorious_bZ", away: "Dont Worry", homeScore: 2, awayScore: 6 },
     { round: 2, home: "Madoda FC", away: "Heathens United", homeScore: 3, awayScore: 2 },
     { round: 2, home: "Danger FC", away: "Manyora", homeScore: 2, awayScore: 1 },
     { round: 2, home: "STRZ", away: "Spartanburg FC", homeScore: 12, awayScore: 6 },
     { round: 2, home: "sfundo FC", away: "ATTACKERS", homeScore: 0, awayScore: 3 ,forfeit: true },
     { round: 2, home: "Sabah FC ", away: "Busby Babes", homeScore: 0, awayScore: 3, forfeit: true },
	 //Matchday 3
     { round: 3, home: "ATTACKERS", away: "Spartanburg FC", homeScore: 8, awayScore: 3 },
	 { round: 3, home: "Dont Worry", away: "Muntu19", homeScore: 3, awayScore: 0 ,forfeit: true },
     { round: 3, home: "Notorious_bZ", away: "Madoda FC", homeScore: 4, awayScore: 1 },
     { round: 3, home: "Busby Babes", away: "STRZ", homeScore: 3, awayScore: 4 },
     { round: 3, home: "Heathens United", away: "Danger FC", homeScore: 0, awayScore: 0, forfeit: true},
     { round: 3, home: "Manyora", away: "sfundo FC", homeScore: 0, awayScore: 0, forfeit: true },
     { round: 3, home: "Intra FC", away: "Sabah FC ", homeScore: 3, awayScore: 0, forfeit: true },
     //Matchday 4	 
	 { round: 4, home: "STRZ", away: "Intra FC", homeScore: 3, awayScore: 2 },
	 { round: 4, home: "StreetwiseFC", away: "Muntu19", homeScore: 4, awayScore: 3 }, 
	 { round: 4, home: "Danger FC", away: "Notorious_bZ", homeScore: 7, awayScore: 2 },
	 { round: 4, home: "Madoda FC", away: "Dont Worry", homeScore: 11, awayScore: 2 },
     { round: 4, home: "sfundo FC", away: "Heathens United", homeScore: 4, awayScore: 2 },
     { round: 4, home: "Spartanburg FC", away: "Manyora", homeScore: 2 , awayScore: 6 },
     { round: 4, home: "ATTACKERS", away: "Busby Babes", homeScore: 3, awayScore: 2 }, 
	 //Matchday 5
	 { round: 5, home: "Intra FC", away: "ATTACKERS", homeScore: 2, awayScore: 5 },
	 { round: 5, home: "Heathens United", away: "Spartanburg FC", homeScore: 4, awayScore: 2 },
	 { round: 5, home: "Notorious_bZ", away: "sfundo FC", homeScore: 1, awayScore: 2 },
	 { round: 5, home: "Manyora", away: "Busby Babes", homeScore: 6, awayScore: 2 },
	 { round: 5, home: "Dont Worry", away: "StreetwiseFC", homeScore: 3, awayScore: 10 },
	 { round: 5, home: "Muntu19", away: "Sabah FC ", homeScore: 0, awayScore: 0, forfeit: true },
	 { round: 5, home: "Madoda FC", away: "Danger FC", homeScore: 9, awayScore: 0 },
	 //Matchday 6
	 { round: 6, home: "Spartanburg FC", away: "Notorious_bZ", homeScore: 1, awayScore: 6 }, 
	 { round: 6, home: "Busby Babes", away: "Heathens United", homeScore: 5, awayScore: 4 },
	 { round: 6, home: "sfundo FC", away: "Madoda FC", homeScore: 3, awayScore: 2 },
	 { round: 6, home: "Manyora", away: "Intra FC", homeScore: 5, awayScore: 2 },
	 { round: 6, home: "STRZ", away: "Muntu19", homeScore: 3, awayScore: 0 },
	 { round: 6, home: "Danger FC", away: "Dont Worry", homeScore: 0, awayScore: 0,forfeit: true  },
	 { round: 6, home: "Sabah FC ", away: "StreetwiseFC", homeScore: 3, awayScore: 8},
	 
	 //Matchday 7
	 { round: 7, home: "Muntu19", away: "ATTACKERS", homeScore: 1, awayScore: 5 },
	 { round: 7, home: "Notorious_bZ", away: "Busby Babes", homeScore: 4, awayScore: 6 },
	 { round: 7, home: "Madoda FC", away: "Spartanburg FC", homeScore: 3, awayScore: 4 },
	 { round: 7, home: "Danger FC", away: "sfundo FC", homeScore: 0, awayScore: 13 },
	 { round: 7, home: "StreetwiseFC", away: "STRZ", homeScore: 4, awayScore: 1 },
	 { round: 7, home: "Heathens United", away: "Intra FC", homeScore: 0, awayScore: 4 },
	 { round: 7, home: "Dont Worry", away: "Sabah FC ", homeScore: 0, awayScore: 0, forfeit: true },
	 //Matchday 8
	 { round: 8, home: "Intra FC", away: "Notorious_bZ", homeScore: 2, awayScore: 3 },
	 { round: 8, home: "sfundo FC", away: "Dont Worry", homeScore: 2, awayScore: 4 },
	 { round: 8, home: "Spartanburg FC", away: "Danger FC", homeScore: 1, awayScore: 9 },
	 { round: 8, home: "ATTACKERS", away: "StreetwiseFC", homeScore: 2, awayScore: 4 },
	 { round: 8, home: "Busby Babes", away: "Madoda FC", homeScore: 3, awayScore: 4 },
	 { round: 8, home: "STRZ", away: "Sabah FC ", homeScore: 0, awayScore: 0, forfeit: true  },
	 { round: 8, home: "Manyora", away: "Muntu19", homeScore: 3, awayScore: 0, forfeit: true },
	 //Matchday 9
	 { round: 9, home: "Dont Worry", away: "STRZ", homeScore: 5, awayScore: 2 },
	 { round: 9, home: "Muntu19", away: "Heathens United", homeScore: 0, awayScore: 3, forfeit: true },
	 { round: 9, home: "Danger FC", away: "Busby Babes", homeScore: 4, awayScore: 2 },
	 { round: 9, home: "Sabah FC ", away: "ATTACKERS", homeScore: 2, awayScore: 1 },
	 { round: 9, home: "Madoda FC", away: "Intra FC", homeScore: 1, awayScore: 0 },
	 { round: 9, home: "sfundo FC", away: "Spartanburg FC", homeScore: 9, awayScore: 4 },
	 { round: 9, home: "StreetwiseFC", away: "Manyora", homeScore: 0, awayScore: 0, forfeit: true },
	 //Matchday 10
	 { round: 10, home: "ATTACKERS", away: "STRZ", homeScore: 7, awayScore: 5 },
	 { round: 10, home: "Notorious_bZ", away: "Muntu19", homeScore: 3, awayScore: 0, forfeit: true },
	 { round: 10, home: "Heathens United", away: "StreetwiseFC", homeScore: 0, awayScore: 10 },
	 { round: 10, home: "Busby Babes", away: "sfundo FC", homeScore: 3, awayScore: 3 },
	 { round: 10, home: "Intra FC", away: "Danger FC", homeScore: 4, awayScore: 7 },
	 { round: 10, home: "", away: "", homeScore: null, awayScore: null },
	 { round: 10, home: "", away: "", homeScore: null, awayScore: null },
	 //Matchday 11
	 { round: 11, home: "Dont Worry", away: "ATTACKERS", homeScore: 2, awayScore: 6 },
	 { round: 11, home: "Madoda FC", away: "Muntu19", homeScore: 3, awayScore: 0, forfeit: true },
	 { round: 11, home: "Spartanburg FC", away: "Busby Babes", homeScore: 0, awayScore: 7 },
	 { round: 11, home: "sfundo FC", away: "Intra FC", homeScore: 6, awayScore: 2 },
	 { round: 11, home: "StreetwiseFC", away: "Notorious_bZ", homeScore: 3 , awayScore: 0,forfeit: true },
	 //Matchday 12
	 { round: 12, home: "Heathens United", away: "STRZ", homeScore: 3, awayScore:2},
	 { round: 12, home: "Muntu19", away: "Danger FC", homeScore: 0, awayScore: 3, forfeit: true },
	 { round: 12, home: "Manyora", away: "ATTACKERS", homeScore: 3, awayScore: 0 },
	 { round: 12, home: "Madoda FC", away: "StreetwiseFC", homeScore: 0, awayScore: 4 },
	 { round: 12, home: "Notorious_bZ", away: "Sabah FC", homeScore: 0, awayScore: 3,forfeit: true },
	 //Matchday 13
	 { round: 13, home: "Busby Babes", away: "Intra FC", homeScore: 6, awayScore: 3 },
	 { round: 13, home: "ATTACKERS", away: "Heathens United", homeScore: 6, awayScore: 2 },
	 { round: 13, home: "sfundo FC", away: "Muntu19", homeScore: 3, awayScore: 0, forfeit: true },
	 { round: 13, home: "Danger FC", away: "StreetwiseFC", homeScore: 2, awayScore: 3 },
	 { round: 13, home: "STRZ", away: "Notorious_bZ", homeScore: 3, awayScore: 0,forfeit: true },
	 //Matchday 14
	 { round: 14, home: "Muntu19", away: "Spartanburg FC", homeScore: 0, awayScore: 3, forfeit: true },
	 { round: 14, home: "StreetwiseFC", away: "sfundo FC", homeScore: 4, awayScore: 4 },
	 { round: 14, home: "Notorious_bZ", away: "ATTACKERS", homeScore: 2, awayScore: 3 },
	 { round: 14, home: "Madoda FC", away: "STRZ", homeScore: 3, awayScore: 1 },
	 { round: 14, home: "Notorious_bZ", away: "ATTACKERS", homeScore: 0, awayScore: 3,forfeit: true },
	 { round: 14, home: "Danger FC", away: "Sabah FC", homeScore: 4, awayScore: 2,forfeit: false },
	 //Matchday 15
	 { round: 15, home: "Dont Worry", away: "Heathens United", homeScore: 1, awayScore:2}, 
	 { round: 15, home: "Busby Babes", away: "Muntu19", homeScore: 3, awayScore: 0, forfeit: true },
	 { round: 15, home: "ATTACKERS", away: "Madoda FC", homeScore: 4, awayScore: 1 },
	 { round: 15, home: "Manyora", away: "Notorious_bZ", homeScore: 3, awayScore: 0,forfeit: true },
	 
	 //=====Second Half of Season======
	 
	 //Matchday 16
	 { round: 16, home: "Muntu19", away: "Intra FC", homeScore: 0, awayScore: 3, forfeit: true },
	 { round: 16, home: "StreetwiseFC", away: "Busby Babes", homeScore: 4, awayScore: 4 },
	 { round: 16, home: "Danger FC", away: "ATTACKERS", homeScore: 3, awayScore: 2 },
	 //Matchday 17
	 { round: 17, home: "Heathens United", away: "Madoda FC", homeScore: 1, awayScore: 5 },
	 { round: 17, home: "Busby Babes", away: "Sabah FC ", homeScore: 7, awayScore: 2 },
	 { round: 17, home: "Manyora", away: "Danger FC", homeScore: 7, awayScore: 3 },
	 //Matchday 18
	 { round: 18, home: "Muntu19", away: "Dont Worry", homeScore: 0, awayScore: 3, forfeit: true },
	 { round: 18, home: "STRZ", away: "Busby Babes", homeScore: 8, awayScore: 1 },
	 { round: 18, home: "Danger FC", away: "Heathens United", homeScore: 10, awayScore: 2 },
	 { round: 18, home: "Spartanburg FC", away: "ATTACKERS", homeScore: 5, awayScore: 6 },
	 //Matchday 19
	 { round: 19, home: "Muntu19", away: "StreetwiseFC", homeScore: 0, awayScore: 3, forfeit: true },
	 { round: 19, home: "Busby Babes", away: "ATTACKERS", homeScore: 5, awayScore: 3 },
	 //Matchday 20
	 { round: 20, home: "Sabah FC ", away: "Muntu19", homeScore: 3, awayScore: 0, forfeit: true },
	 { round: 20, home: "Spartanburg FC", away: "Heathens United", homeScore: 8, awayScore: 1 },
	 { round: 20, home: "Busby Babes", away: "Manyora", homeScore: 4, awayScore: 4 },
	 { round: 20, home: "Danger FC", away: "Madoda FC", homeScore: 1, awayScore: 2 },
	 //Matchday 21
	 { round: 21, home: "Heathens United", away: "Busby Babes", homeScore: 3, awayScore: 3 },
	 { round: 21, home: "Dont Worry", away: "Danger FC", homeScore: 1, awayScore: 2 },
	 { round: 21, home: "Muntu19", away: "STRZ", homeScore: 0, awayScore: 3, forfeit: true },
	 //Matchday 22
	 { round: 22, home: "Intra FC", away: "Heathens United", homeScore: 3, awayScore:1 },
	 { round: 22, home: "sfundo FC", away: "Danger FC", homeScore: 7, awayScore:3 },
	 { round: 22, home: "ATTACKERS", away: "Muntu19", homeScore: 3, awayScore: 0, forfeit: true },
	 { round: 22, home: "Spartanburg FC", away: "Madoda FC", homeScore: 4, awayScore: 6 },
	 //Matchday 23
	 { round: 23, home: "Dont Worry", away: "sfundo FC", homeScore: 1, awayScore:7 },
	 { round: 23, home: "StreetwiseFC", away: "ATTACKERS", homeScore: 5, awayScore:4 },
	 { round: 23, home: "Muntu19", away: "Manyora", homeScore: 0, awayScore: 3, forfeit: true },
	 //Matchday 24
	 { round: 24, home: "Heathens United", away: "Muntu19", homeScore: 3, awayScore: 0, forfeit: true },
	 { round: 24, home: "Busby Babes", away: "Danger FC", homeScore: 3, awayScore: 4 },
	 { round: 24, home: "ATTACKERS", away: "Sabah FC ", homeScore: 5, awayScore: 2 },
	 { round: 24, home: "STRZ", away: "Dont Worry", homeScore: 0, awayScore: 3 },
	 { round: 24, home: "Spartanburg FC", away: "sfundo FC", homeScore: 1, awayScore: 11 },
	 //Matchday 25
	 { round: 25, home: "Muntu19", away: "Notorious_bZ", homeScore: 0, awayScore: 3, forfeit: true },
	 { round: 25, home: "STRZ", away: "ATTACKERS", homeScore: 0, awayScore: 5 },
	 { round: 25, home: "sfundo FC", away: "Busby Babes", homeScore: 7, awayScore: 6 },
	 { round: 25, home: "StreetwiseFC", away: "Heathens United", homeScore: 8, awayScore: 1 },
	 { round: 25, home: "Danger FC", away: "Intra FC", homeScore: 2, awayScore: 3 },
	 { round: 25, home: "Intra FC", away: "Madoda FC", homeScore: 0, awayScore: 4 },
	 //Matchday 26
	 { round: 26, home: "Muntu19", away: "Madoda FC", homeScore: 0, awayScore: 3, forfeit: true },
	 { round: 26, home: "ATTACKERS", away: "Dont Worry", homeScore: 9, awayScore: 1 },
	 { round: 26, home: "Busby Babes", away: "Spartanburg FC", homeScore: 8, awayScore: 4 },
	 { round: 26, home: "Intra FC", away: "sfundo FC", homeScore: 2, awayScore: 5 },
	 //Matchday 27
	 { round: 27, home: "Danger FC", away: "Muntu19", homeScore: 3, awayScore: 0, forfeit: true },
	 { round: 27, home: "STRZ", away: "Heathens United", homeScore: 3, awayScore:2},
	 { round: 27, home: "StreetwiseFC", away: "Madoda FC", homeScore: 6, awayScore: 2 },
	 //Matchday 28
	 { round: 28, home: "Muntu19", away: "sfundo FC", homeScore: 0, awayScore: 3, forfeit: true },
	 { round: 28, home: "Intra FC", away: "Busby Babes", homeScore: 3, awayScore: 4 },
	 { round: 28, home: "StreetwiseFC", away: "Danger FC", homeScore: 5, awayScore: 3 },
	 { round: 28, home: "Heathens United", away: "ATTACKERS", homeScore: 1, awayScore: 6 },
	 //Matchday 29
	 { round: 29, home: "Spartanburg FC", away: "Muntu19", homeScore: 3, awayScore: 0, forfeit: true },
	 { round: 29, home: "sfundo FC", away: "StreetwiseFC", homeScore: 4, awayScore: 3 },
	 //Matchday 30
	 { round: 30, home: "Muntu19", away: "Busby Babes", homeScore: 0, awayScore: 3, forfeit: true },
	 { round: 30, home: "Heathens United", away: "Dont Worry", homeScore: 2, awayScore:2},
	 { round: 30, home: "ATTACKERS", away: "Madoda FC", homeScore: 8, awayScore: 0 },
	 
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
    // { season: "Season 1", team: "Danger FC" },
  ],
  top4Cup: [
    // { season: "Season 1", team: "Danger FC" },
  ],
  superCup: [
    // { edition: "Super Cup 1", team: "Danger FC" },
  ],
  division2: [
    // { season: "Div 2 Season 1", team: "Heathens United" },
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
  name: "eFootballers Cup",
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
  name: "Champions Cup",
  blurb: "Contested by the top 8 finishers in the eFootball League table at the end of the season.",
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
    "Dont Worry": {
      playstyle: "Quick Counter/ Out Wide",
      highestDivision: "Division 1",
      manager: "Xabi Alonso",
      user: "IceyF",
      titles: 0
   },
     "StreetwiseFC": {
     playstyle: "Quick Counter",
     highestDivision: "",
     manager: "Roberto Martinez",
     user: "StreetwiseFC",
     titles: 0
   },
     "ATTACKERS": {
      playstyle: "Possession",
      highestDivision: "Division 1",
      manager: "Thomas Tuchel",
      user: "khuseloBusquets",
      titles: 0
     },
    "Danger FC": {
     playstyle: "Long Ball Counter",
     highestDivision: "Division 1",
      manager: "Frank Beckenbauer",
     user: "Lambo",
     titles: 0
    },
     "Heathens United": {
      playstyle: "Possession / Overload",
      highestDivision: "Division 1",
      manager: "Frank Lampard/Cesc Fasegas",
      user: "Don Ladino",
      titles: 0
     },
     "STRZ": {
       playstyle: "Outwide",
       highestDivision: "Division 1",
       manager: "Ruben Amorim",
       user: "Lueelo_lynx",
      titles: 0
     },
     "Intra FC": {
       playstyle: "",
       highestDivision: "Division 1",
       manager: "",
       user: "Scully03",
       titles: 0
    },
     "Spartanburg FC": {
      playstyle: "Quick Counter",
      highestDivision: "Division 1",
      manager: "Jurgen Klopp",
      user: "carelessk3lvin",
      titles: 0
    },
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
      "Busby Babes": {
       playstyle: "Quick Counter",
       highestDivision: "Division 1",
       manager: "Antonio Conte",
       user: "W1ZZYUCHIHA",
       titles: 0
    },
      "Sabah FC ": {
       playstyle: "",
       highestDivision: "Division 1",
       manager: "",
       user: "swafiscents",
       titles: 0
     },
      "sfundoFC": {
       playstyle: "Quick Counter",
       highestDivision: "Division 1",
       manager: "Jose Mourinho",
       user: "Mapholoba",
       titles: 0
     },
     "Madoda FC": {
      playstyle: "Long Ball",
      highestDivision: "Division 1",
      manager: "Didler Deschamps",
      user: "EmperorZoocci",
      titles: 0
     },
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
    body: "These are the rules and regulations set by Don Infantino: Smart Assist: OFF.  Both home and away legs to be played back 2 back.   Match settings: Both teams set to Excellent Conditions before match. IF NOT, match will be restarted set to correct conditions. Max Subs and Intervals.   Match Duration:10 minutes, Match Times: Matchdays will have dates from the second season above fixtures with the time limit as to allow for the table updates to occur during downtime.   Friendlies are allowed after league matches period or before."
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
  "Rommy", "Thee_H1MOTHY", "Madiba Fc", "Destroy.a", "Silent Killers FC", 
  "Kaizer Chiefs XI", "NewPlayer10", "NewPlayer11", "NewPlayer12",
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
