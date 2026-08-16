/* ============================================================
   EDIT THIS FILE EACH WEEK. That's it. Refresh index.html.
   ============================================================ */

/* ------------------------------------------------------------
   SEASON INFO
   startDate      -> when Matchday 1 kicks off
   leagueWindowDays -> how many days the WHOLE league phase gets
                        (play as many matchdays a day as works)
   cupWindowDays  -> days after the league ends for cup matches
                        (eFootballerz Cup is the exception -- it
                        runs all season alongside the league)
   New season always starts on the 23rd.
   ------------------------------------------------------------ */
const SEASON_INFO = {
  number: 2,
  startDate: "2026-08-23",
  leagueWindowDays: 15,
  cupWindowDays: 10
};

/* ------------------------------------------------------------
   1) TEAMS (DIVISION 1 -- Division 2 has been merged in, there's
   only one division now).
   *** PLACEHOLDER *** -- this is your old TEAMS + TEAMS2 combined
   (30 names). You said the real roster is ~25 -- trim this list
   down to your actual final teams, then re-run the fixture
   generator (see generate-fixtures.js) to get a fresh FIXTURES
   list sized to the real roster before the season starts.
   ------------------------------------------------------------ */
const TEAMS = [
  "DontWorry", "Heathens United", "Intra FC", "Manyora", "Busby Babes",
  "ATTACKERS", "Spartanburg FC", "STRZ", "sfundo FC", "Sabah FC ",
  "Danger FC", "StreetwiseFC", "Madoda FC", "Muntu19", "Notorious_bZ",
  "Relegation1", "Relegation2", "Relegation3",
  "Rommy", "Thee_H1MOTHY", "Madiba Fc", "Destroy.a", "Silent Killers FC",
  "Kaizer Chiefs XI", "NewPlayer10", "NewPlayer11", "NewPlayer12",
  "NewPlayer13", "NewPlayer14", "NewPlayer15"
];
// If TEAMS.length is odd, a "BYE" is auto-added -- don't add it yourself.

/* ------------------------------------------------------------
   2) FIXTURES -- the whole season, ONE array. Each match already
   has home/away filled in by the generator (legs back-to-back --
   MD1 is the first leg, MD2 is the immediate reverse fixture).
   To log a result: just fill in homeScore / awayScore below.
   Forfeit: flip forfeit to true (leave the score as the
   awarded scoreline per the regulations, e.g. 3-0).
   *** This replaces the old separate TEAMS + RESULTS matching --
   no more typing team names twice. ***
   THIS IS A PLACEHOLDER generated from the 30-team list above --
   regenerate once your real roster is locked in.
   ------------------------------------------------------------ */
const FIXTURES = [
  {
    "matchday": 1,
    "matches": [
      {
        "home": "DontWorry",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 2,
    "matches": [
      {
        "home": "NewPlayer15",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 3,
    "matches": [
      {
        "home": "NewPlayer14",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 4,
    "matches": [
      {
        "home": "DontWorry",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 5,
    "matches": [
      {
        "home": "DontWorry",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 6,
    "matches": [
      {
        "home": "NewPlayer13",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 7,
    "matches": [
      {
        "home": "NewPlayer12",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 8,
    "matches": [
      {
        "home": "DontWorry",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 9,
    "matches": [
      {
        "home": "DontWorry",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 10,
    "matches": [
      {
        "home": "NewPlayer11",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 11,
    "matches": [
      {
        "home": "NewPlayer10",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 12,
    "matches": [
      {
        "home": "DontWorry",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 13,
    "matches": [
      {
        "home": "DontWorry",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 14,
    "matches": [
      {
        "home": "Kaizer Chiefs XI",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 15,
    "matches": [
      {
        "home": "Silent Killers FC",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 16,
    "matches": [
      {
        "home": "DontWorry",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 17,
    "matches": [
      {
        "home": "DontWorry",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 18,
    "matches": [
      {
        "home": "Destroy.a",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 19,
    "matches": [
      {
        "home": "Madiba Fc",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 20,
    "matches": [
      {
        "home": "DontWorry",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 21,
    "matches": [
      {
        "home": "DontWorry",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 22,
    "matches": [
      {
        "home": "Thee_H1MOTHY",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 23,
    "matches": [
      {
        "home": "Rommy",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 24,
    "matches": [
      {
        "home": "DontWorry",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 25,
    "matches": [
      {
        "home": "DontWorry",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 26,
    "matches": [
      {
        "home": "Relegation3",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 27,
    "matches": [
      {
        "home": "Relegation2",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 28,
    "matches": [
      {
        "home": "DontWorry",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 29,
    "matches": [
      {
        "home": "DontWorry",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 30,
    "matches": [
      {
        "home": "Relegation1",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 31,
    "matches": [
      {
        "home": "Notorious_bZ",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 32,
    "matches": [
      {
        "home": "DontWorry",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 33,
    "matches": [
      {
        "home": "DontWorry",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 34,
    "matches": [
      {
        "home": "Muntu19",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 35,
    "matches": [
      {
        "home": "Madoda FC",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 36,
    "matches": [
      {
        "home": "DontWorry",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 37,
    "matches": [
      {
        "home": "DontWorry",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 38,
    "matches": [
      {
        "home": "StreetwiseFC",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 39,
    "matches": [
      {
        "home": "Danger FC",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 40,
    "matches": [
      {
        "home": "DontWorry",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 41,
    "matches": [
      {
        "home": "DontWorry",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 42,
    "matches": [
      {
        "home": "Sabah FC ",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 43,
    "matches": [
      {
        "home": "sfundo FC",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 44,
    "matches": [
      {
        "home": "DontWorry",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 45,
    "matches": [
      {
        "home": "DontWorry",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 46,
    "matches": [
      {
        "home": "STRZ",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 47,
    "matches": [
      {
        "home": "Spartanburg FC",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 48,
    "matches": [
      {
        "home": "DontWorry",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 49,
    "matches": [
      {
        "home": "DontWorry",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 50,
    "matches": [
      {
        "home": "ATTACKERS",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 51,
    "matches": [
      {
        "home": "Busby Babes",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 52,
    "matches": [
      {
        "home": "DontWorry",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 53,
    "matches": [
      {
        "home": "DontWorry",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 54,
    "matches": [
      {
        "home": "Manyora",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 55,
    "matches": [
      {
        "home": "Intra FC",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 56,
    "matches": [
      {
        "home": "DontWorry",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 57,
    "matches": [
      {
        "home": "DontWorry",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "NewPlayer15",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "NewPlayer14",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "NewPlayer13",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "NewPlayer12",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "NewPlayer11",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "NewPlayer10",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "Thee_H1MOTHY",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Muntu19",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Relegation3",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation1",
        "away": "Relegation2",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  },
  {
    "matchday": 58,
    "matches": [
      {
        "home": "Heathens United",
        "away": "DontWorry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer15",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer14",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer13",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer12",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer11",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "NewPlayer10",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Thee_H1MOTHY",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Muntu19",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation3",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Relegation2",
        "away": "Relegation1",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      }
    ]
  }
];

/* ------------------------------------------------------------
   PREVIOUS STANDINGS ORDER -- legacy/optional, movement arrows
   are automatic. Leave as [].
   ------------------------------------------------------------ */
const PREVIOUS_STANDINGS_ORDER = [];

/* ------------------------------------------------------------
   SUPER CUP -- League Champion vs Champions Cup winner.
   ------------------------------------------------------------ */
const SUPER_CUP = {
  active: false,
  teamA: "",
  teamB: "",
  legs: [
    { home: "", away: "", homeScore: null, awayScore: null, date: null },
  ]
};

/* ------------------------------------------------------------
   CHAMPIONS SUPER CUP (new) -- Champions Cup winner vs
   Conference Cup winner. Same shape as SUPER_CUP.
   ------------------------------------------------------------ */
const CHAMPIONS_SUPER_CUP = {
  active: false,
  teamA: "",
  teamB: "",
  legs: [
    { home: "", away: "", homeScore: null, awayScore: null, date: null },
  ]
};

/* ------------------------------------------------------------
   WALL OF CHAMPIONS
   ------------------------------------------------------------ */
const CHAMPIONS = {
  league: [
    { season: "Season 1: Aug 26", team: "ATTACKERS" },
  ],
  domesticCup: [],
  championsCup: [],
  conferenceCup: [],
  superCup: [],
  championsSuperCup: [],
};

/* ============================================================
   CUPS
   - DOMESTIC_CUP (eFootballerz Cup) -- open knockout, everyone
     plays, runs all season alongside the league.
   - CHAMPIONS_CUP -- top 8 finishers, played after the league
     phase, in the cup window.
   - CONFERENCE_CUP (new) -- 9th-17th finishers, same cup window.
   Add "date" per round if you want to log when it was played --
   optional, not required.
   ============================================================ */

const DOMESTIC_CUP = {
  active: false,
  name: "eFootballerz Cup",
  rounds: [
    // { label: "Round of 16", date: null, matches: [
    //   { home: "", away: "", homeScore: null, awayScore: null },
    // ] },
  ]
};

const CHAMPIONS_CUP = {
  active: true,
  name: "Champions Cup",
  blurb: "Contested by the top 8 finishers in the eFootball League table at the end of the season.",
  rounds: [
	 {
        label: "Quarter-Finals", date: "2026-08-18", matches: [
          { home: "ATTACKERS", away: "DontWorry", homeScore: null, awayScore: null }, // 1st vs 6th
          { home: "sfundo FC", away: "Danger FC", homeScore: null, awayScore: null }, // 2nd vs 5th
	       { home: "STRZ", away: "StreetwiseFC", homeScore: null, awayScore: null }, // 8th vs 3rd
         { home: "Madoda FC", away: "Manyora", homeScore: null, awayScore: null }, // 4th vs 7th
        ]
       },
     {
       label: "Semi-Finals", date: "2026-08-18", 
       matches: [
    //     { home: "", away: "", homeScore: null, awayScore: null }, // 1st vs 4th
    //     { home: "", away: "", homeScore: null, awayScore: null }, // 2nd vs 3rd
       ]
     },
     {
      label: "Final", date: "2026-08-18", 
       matches: [
      //   { home: "", away: "", homeScore: null, awayScore: null },
       ]
     },
  ]
};


const CONFERENCE_CUP = {
  active: false,
  name: "Conference Cup",
  blurb: "Contested by the 9th-17th finishers in the eFootball League table at the end of the season.",
  rounds: [
    // { label: "Round 1", date: null, matches: [
    //   { home: "", away: "", homeScore: null, awayScore: null },
    // ] },
  ]
};

/* ============================================================
   TEAM INFO -- powers the tap-to-expand info dropdown on team
   names in the standings table (also shows that team's fixtures,
   results, and H2H once matches are logged). Key MUST match the
   team name exactly as used in TEAMS.
   ============================================================ */

const TEAM_INFO = {
  "DontWorry": { playstyle: "Quick Counter/ Out Wide", highestPosition: "6", manager: "Xabi Alonso", user: "IceyF", titles: 0 },
  "StreetwiseFC": { playstyle: "Quick Counter", highestPosition: "2", manager: "Roberto Martinez", user: "StreetwiseFC", titles: 0 },
  "ATTACKERS": { playstyle: "Possession", highestPosition: "1 (Current League Champion)", manager: "Thomas Tuchel", user: "khuseloBusquets", titles: 1 },
  "Danger FC": { playstyle: "Long Ball Counter", highestPosition: "5", manager: "Frank Beckenbauer", user: "Lambo", titles: 0 },
  "Heathens United": { playstyle: "Possession / Overload", highestPosition: "12", manager: "Frank Lampard/Cesc Fasegas", user: "Don Ladino", titles: 0 },
  "STRZ": { playstyle: "Outwide", highestPosition: "8", manager: "Ruben Amorim", user: "Lueelo_lynx", titles: 0 },
  "Intra FC": { playstyle: "", highestPosition: "Division 1", manager: "10", user: "Scully03", titles: 0 },
  "Spartanburg FC": { playstyle: "Quick Counter", highestPosition: "13", manager: "Jurgen Klopp", user: "carelessk3lvin", titles: 0 },
  "Busby Babes": { playstyle: "Quick Counter", highestPosition: "9", manager: "Antonio Conte", user: "W1ZZYUCHIHA", titles: 0 },
  "Sabah FC ": { playstyle: "", highestPosition: "11", manager: "", user: "swafiscents", titles: 0 },
  // FIXED: this used to be keyed "sfundoFC" (no space), which didn't match
  // the "sfundo FC" (with space) used in TEAMS -- the info panel was
  // silently failing for this team. Key now matches exactly.
  "sfundo FC": { playstyle: "Quick Counter", highestPosition: "", manager: "Jose Mourinho", user: "Mapholoba", titles: 0 },
  "Madoda FC": { playstyle: "Long Ball", highestPosition: "", manager: "Didler Deschamps", user: "EmperorZoocci", titles: 0 },
  // Add the rest of your roster here as you get their info --
  // any team without an entry just won't expand, that's safe.
};

/* ============================================================
   REGULATIONS
   ============================================================ */

const REGULATIONS = [
  {
    heading: "League Format",
    body: "These are the rules and regulations set by Don Infantino: <br>Smart Assist: OFF.  <br>Both home and away legs to be played back 2 back.  <br> Match settings: Both teams set to Excellent Conditions before match. <br>IF NOT, match will be restarted set to correct conditions. <br>Max Subs and Intervals.   <br>Match Duration:10 minutes.  <br>Season structure: the league phase runs for 15 days (play as many matchdays a day as works for you), followed by 10 days for cup matches (the eFootballerz Cup is the exception -- it runs all season alongside the league). A new season kicks off every 23rd. <br>Friendlies are allowed after league matches period or before."
  },
  {
    heading: "Qualification — League Title",
    body: "Top of the Division 1 table at the end of the season."
  },
  {
    heading: "Qualification — eFootballerz Cup",
    body: "Open knockout cup — No fancy jargon, all participants can join this cup, played throughout the season."
  },
  {
    heading: "Qualification — Champions Cup",
    body: "Contested by the teams that finish 1st-8th in the table at the end of the league phase."
  },
  {
    heading: "Qualification — Conference Cup",
    body: "Contested by the teams that finish 9th-17th in the table at the end of the league phase."
  },
  {
    heading: "Qualification — Super Cup",
    body: "Contested by the League Champion vs the Champions Cup winner. <br>If the same team wins both, 2nd place in the League steps in instead.<br> Cup is contested in one match set to extra time and penalties."
  },
  {
    heading: "Qualification — Champions Super Cup",
    body: "Contested by the Champions Cup winner vs the Conference Cup winner.<br> Cup is contested in one match set to extra time and penalties."
  },
  {
    heading: "Match Scheduling & Forfeits",
    body: "After those times, match is a draw on both competing teams on both home and away legs given both did not reach out, however if you reach out and your opponent does not respond, then its a 3-0 win for you in both home and away legs.  <br>If a player has an emergency(family, work, school, network) they should communicate prior to the close of the matchday to avoid unfair forfeits (Grace Period is 3 matches max(3 days), if you exceed the 3 match reschedule you will draw 0-0 all those the matches and you will count as a non-responding player and will be subject to the Forfeit clause)  <br>If a player is suspected of using SMART ASSIST, they will be subject to a 10 point deduction at the end of the season if multiple offences ensue then immediate relegation or expulsion from the league will be put to a vote."
  }
];

/* ============================================================
   MUSIC PLAYER
   ============================================================ */

const TRACKS = [
  { title: "Many People", artist: "Adekunle Gold", src: "audio/manypeople.mp3" },
  { title: "Lalala", artist: "Young John & Rema", src: "audio/lalala.mp3" },
  { title: "404 (New Era)", artist: "KiiKii", src: "audio/404.mp3" },
  { title: "Walk Walk Walk", artist: "Good Neighbours", src: "audio/walkwalkwalk.mp3" },
  { title: "Euphoria", artist: "Talia Ray", src: "audio/euphoria.mp3" },
  { title: "Dopamine", artist: "Robyn", src: "audio/dopamine.mp3" }
];
