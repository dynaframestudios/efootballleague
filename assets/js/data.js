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
  startDate: "2026-08-24",
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
  "Dont Worry", "Heathens United", "Intra FC", "Manyora", "Busby Babes",
  "ATTACKERS", "Spartanburg FC", "STRZ", "sfundo FC", "Sabah FC ",
  "Danger FC", "StreetwiseFC", "Madoda FC", "Belgium", "Notorious_bZ",
  "THE NAPOLIANS", "Flava.AC", "Galatasaray",
  "Rommy", "Invisible United", "Madiba Fc", "Destroy.a", "Silent Killers FC",
  "Kaizer Chiefs XI","Saints FC","Arsenal"
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
        "home": "Dont Worry",
        "away": "Arsenal",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Saints FC",
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
        "homeScore": 5,
        "awayScore": 2,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Madiba Fc",
        "homeScore": 2,
        "awayScore": 4,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "Invisible United",
        "homeScore": 3,
        "awayScore": 7,
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
        "away": "Galatasaray",
        "homeScore": 2,
        "awayScore": 3,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "THE NAPOLIANS",
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
        "away": "Belgium",
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
        "home": "Arsenal",
        "away": "Dont Worry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Saints FC",
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
        "homeScore": 2,
        "awayScore": 7,
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
        "home": "Invisible United",
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
        "home": "Galatasaray",
        "away": "sfundo FC",
        "homeScore": 3,
        "awayScore": 3,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "THE NAPOLIANS",
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
        "home": "Belgium",
        "away": "Madoda FC",
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
        "home": "Saints FC",
        "away": "Dont Worry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Arsenal",
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
        "home": "Invisible United",
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
        "home": "Galatasaray",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "THE NAPOLIANS",
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
        "home": "Belgium",
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
    "matchday": 4,
    "matches": [
      {
        "home": "Dont Worry",
        "away": "Saints FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Arsenal",
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
        "away": "Invisible United",
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
        "away": "Galatasaray",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "THE NAPOLIANS",
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
        "away": "Belgium",
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
    "matchday": 5,
    "matches": [
      {
        "home": "Dont Worry",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Saints FC",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Arsenal",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Madiba Fc",
        "homeScore": 0,
        "awayScore": 17,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Invisible United",
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
        "away": "Galatasaray",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "THE NAPOLIANS",
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
        "away": "Belgium",
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
    "matchday": 6,
    "matches": [
      {
        "home": "Kaizer Chiefs XI",
        "away": "Dont Worry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Saints FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Arsenal",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Heathens United",
        "homeScore": 6,
        "awayScore": 0,
        "forfeit": false
      },
      {
        "home": "Invisible United",
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
        "home": "Galatasaray",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "THE NAPOLIANS",
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
        "home": "Belgium",
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
    "matchday": 7,
    "matches": [
      {
        "home": "Silent Killers FC",
        "away": "Dont Worry",
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
        "away": "Saints FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Invisible United",
        "away": "Arsenal",
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
        "home": "Galatasaray",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "THE NAPOLIANS",
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
        "home": "Belgium",
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
    "matchday": 8,
    "matches": [
      {
        "home": "Dont Worry",
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
        "home": "Saints FC",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Arsenal",
        "away": "Invisible United",
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
        "away": "Galatasaray",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "THE NAPOLIANS",
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
        "away": "Belgium",
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
    "matchday": 9,
    "matches": [
      {
        "home": "Dont Worry",
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
        "away": "Invisible United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Saints FC",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Arsenal",
        "away": "Galatasaray",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "THE NAPOLIANS",
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
        "away": "Belgium",
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
    "matchday": 10,
    "matches": [
      {
        "home": "Destroy.a",
        "away": "Dont Worry",
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
        "home": "Invisible United",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Saints FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Galatasaray",
        "away": "Arsenal",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "THE NAPOLIANS",
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
        "home": "Belgium",
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
    "matchday": 11,
    "matches": [
      {
        "home": "Madiba Fc",
        "away": "Dont Worry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Invisible United",
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
        "home": "Galatasaray",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "Saints FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "THE NAPOLIANS",
        "away": "Arsenal",
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
        "home": "Belgium",
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
    "matchday": 12,
    "matches": [
      {
        "home": "Dont Worry",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Invisible United",
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
        "away": "Galatasaray",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Saints FC",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Arsenal",
        "away": "THE NAPOLIANS",
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
        "away": "Belgium",
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
    "matchday": 13,
    "matches": [
      {
        "home": "Dont Worry",
        "away": "Invisible United",
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
        "away": "Galatasaray",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "THE NAPOLIANS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Saints FC",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Arsenal",
        "away": "Belgium",
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
    "matchday": 14,
    "matches": [
      {
        "home": "Invisible United",
        "away": "Dont Worry",
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
        "home": "Galatasaray",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "THE NAPOLIANS",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Saints FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Belgium",
        "away": "Arsenal",
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
    "matchday": 15,
    "matches": [
      {
        "home": "Rommy",
        "away": "Dont Worry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Galatasaray",
        "away": "Invisible United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "THE NAPOLIANS",
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
        "home": "Belgium",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "Saints FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Arsenal",
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
    "matchday": 16,
    "matches": [
      {
        "home": "Dont Worry",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Invisible United",
        "away": "Galatasaray",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "THE NAPOLIANS",
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
        "away": "Belgium",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Saints FC",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Arsenal",
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
    "matchday": 17,
    "matches": [
      {
        "home": "Dont Worry",
        "away": "Galatasaray",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Invisible United",
        "away": "THE NAPOLIANS",
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
        "away": "Belgium",
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
        "home": "Saints FC",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Arsenal",
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
    "matchday": 18,
    "matches": [
      {
        "home": "Galatasaray",
        "away": "Dont Worry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "THE NAPOLIANS",
        "away": "Invisible United",
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
        "home": "Belgium",
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
        "away": "Saints FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Arsenal",
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
    "matchday": 19,
    "matches": [
      {
        "home": "Flava.AC",
        "away": "Dont Worry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "THE NAPOLIANS",
        "away": "Galatasaray",
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
        "home": "Belgium",
        "away": "Invisible United",
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
        "away": "Saints FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Arsenal",
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
    "matchday": 20,
    "matches": [
      {
        "home": "Dont Worry",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Galatasaray",
        "away": "THE NAPOLIANS",
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
        "home": "Invisible United",
        "away": "Belgium",
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
        "home": "Saints FC",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Arsenal",
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
    "matchday": 21,
    "matches": [
      {
        "home": "Dont Worry",
        "away": "THE NAPOLIANS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Galatasaray",
        "away": "Belgium",
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
        "home": "Invisible United",
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
        "home": "Saints FC",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Arsenal",
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
    "matchday": 22,
    "matches": [
      {
        "home": "THE NAPOLIANS",
        "away": "Dont Worry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Belgium",
        "away": "Galatasaray",
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
        "away": "Invisible United",
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
        "away": "Saints FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Arsenal",
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
    "matchday": 23,
    "matches": [
      {
        "home": "Notorious_bZ",
        "away": "Dont Worry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Belgium",
        "away": "THE NAPOLIANS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Galatasaray",
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
        "away": "Invisible United",
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
        "away": "Saints FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Arsenal",
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
    "matchday": 24,
    "matches": [
      {
        "home": "Dont Worry",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "THE NAPOLIANS",
        "away": "Belgium",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Galatasaray",
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
        "home": "Invisible United",
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
        "home": "Saints FC",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Arsenal",
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
    "matchday": 25,
    "matches": [
      {
        "home": "Dont Worry",
        "away": "Belgium",
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
        "home": "THE NAPOLIANS",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Galatasaray",
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
        "home": "Invisible United",
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
        "home": "Saints FC",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Arsenal",
        "away": "Heathens United",
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
        "home": "Belgium",
        "away": "Dont Worry",
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
        "away": "THE NAPOLIANS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Danger FC",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Galatasaray",
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
        "away": "Invisible United",
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
        "away": "Saints FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Arsenal",
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
        "home": "Madoda FC",
        "away": "Dont Worry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Belgium",
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
        "away": "THE NAPOLIANS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "sfundo FC",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Galatasaray",
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
        "away": "Invisible United",
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
        "home": "Arsenal",
        "away": "Saints FC",
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
        "home": "Dont Worry",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Belgium",
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
        "home": "THE NAPOLIANS",
        "away": "Sabah FC ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Galatasaray",
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
        "home": "Invisible United",
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
        "home": "Saints FC",
        "away": "Arsenal",
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
        "home": "Dont Worry",
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
        "home": "Belgium",
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
        "home": "THE NAPOLIANS",
        "away": "STRZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Galatasaray",
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
        "home": "Invisible United",
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
        "away": "Arsenal",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Saints FC",
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
        "home": "StreetwiseFC",
        "away": "Dont Worry",
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
        "away": "Belgium",
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
        "away": "THE NAPOLIANS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Spartanburg FC",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Galatasaray",
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
        "away": "Invisible United",
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
        "home": "Arsenal",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Saints FC",
        "away": "Kaizer Chiefs XI",
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
        "home": "Danger FC",
        "away": "Dont Worry",
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
        "away": "Belgium",
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
        "away": "THE NAPOLIANS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Busby Babes",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Galatasaray",
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
        "away": "Invisible United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Arsenal",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Saints FC",
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
    "matchday": 32,
    "matches": [
      {
        "home": "Dont Worry",
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
        "home": "Belgium",
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
        "home": "THE NAPOLIANS",
        "away": "ATTACKERS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Galatasaray",
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
        "home": "Invisible United",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Arsenal",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Saints FC",
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
    "matchday": 33,
    "matches": [
      {
        "home": "Dont Worry",
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
        "home": "Belgium",
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
        "home": "THE NAPOLIANS",
        "away": "Manyora",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Galatasaray",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Arsenal",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Invisible United",
        "away": "Saints FC",
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
    "matchday": 34,
    "matches": [
      {
        "home": "Sabah FC ",
        "away": "Dont Worry",
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
        "away": "Belgium",
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
        "away": "THE NAPOLIANS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Heathens United",
        "away": "Galatasaray",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Arsenal",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Saints FC",
        "away": "Invisible United",
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
    "matchday": 35,
    "matches": [
      {
        "home": "sfundo FC",
        "away": "Dont Worry",
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
        "away": "Belgium",
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
        "away": "THE NAPOLIANS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Arsenal",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Saints FC",
        "away": "Galatasaray",
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
        "away": "Invisible United",
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
    "matchday": 36,
    "matches": [
      {
        "home": "Dont Worry",
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
        "home": "Belgium",
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
        "home": "THE NAPOLIANS",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "Arsenal",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Galatasaray",
        "away": "Saints FC",
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
        "home": "Invisible United",
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
    "matchday": 37,
    "matches": [
      {
        "home": "Dont Worry",
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
        "home": "Belgium",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Arsenal",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "THE NAPOLIANS",
        "away": "Saints FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "Kaizer Chiefs XI",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Galatasaray",
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
        "home": "Invisible United",
        "away": "Madiba Fc",
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
        "home": "STRZ",
        "away": "Dont Worry",
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
        "away": "Belgium",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Arsenal",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Saints FC",
        "away": "THE NAPOLIANS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Kaizer Chiefs XI",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Silent Killers FC",
        "away": "Galatasaray",
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
        "away": "Invisible United",
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
        "home": "Spartanburg FC",
        "away": "Dont Worry",
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
        "home": "Arsenal",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Saints FC",
        "away": "Belgium",
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
        "away": "THE NAPOLIANS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Destroy.a",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madiba Fc",
        "away": "Galatasaray",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Invisible United",
        "away": "Rommy",
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
        "home": "Dont Worry",
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
        "away": "Arsenal",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Belgium",
        "away": "Saints FC",
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
        "home": "THE NAPOLIANS",
        "away": "Silent Killers FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "Destroy.a",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Galatasaray",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Invisible United",
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
        "home": "Dont Worry",
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
        "away": "Arsenal",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Saints FC",
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
        "home": "Belgium",
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
        "home": "THE NAPOLIANS",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "Invisible United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Galatasaray",
        "away": "Rommy",
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
        "home": "ATTACKERS",
        "away": "Dont Worry",
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
        "home": "Arsenal",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Saints FC",
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
        "away": "Belgium",
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
        "away": "THE NAPOLIANS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Invisible United",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Galatasaray",
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
        "home": "Busby Babes",
        "away": "Dont Worry",
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
        "home": "Arsenal",
        "away": "sfundo FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Saints FC",
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
        "away": "Belgium",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Invisible United",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "THE NAPOLIANS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Galatasaray",
        "away": "Flava.AC",
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
        "home": "Dont Worry",
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
        "away": "Arsenal",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Sabah FC ",
        "away": "Saints FC",
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
        "home": "Belgium",
        "away": "Madiba Fc",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Invisible United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "THE NAPOLIANS",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "Galatasaray",
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
        "home": "Dont Worry",
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
        "away": "Arsenal",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "STRZ",
        "away": "Saints FC",
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
        "away": "Invisible United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Belgium",
        "away": "Rommy",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Galatasaray",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "THE NAPOLIANS",
        "away": "Flava.AC",
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
        "home": "Manyora",
        "away": "Dont Worry",
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
        "home": "Arsenal",
        "away": "Spartanburg FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Saints FC",
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
        "home": "Invisible United",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Rommy",
        "away": "Belgium",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Galatasaray",
        "away": "Notorious_bZ",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "THE NAPOLIANS",
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
        "home": "Intra FC",
        "away": "Dont Worry",
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
        "home": "Arsenal",
        "away": "Busby Babes",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Saints FC",
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
        "home": "Invisible United",
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
        "home": "Galatasaray",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "Belgium",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "THE NAPOLIANS",
        "away": "Notorious_bZ",
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
        "home": "Dont Worry",
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
        "away": "Arsenal",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "ATTACKERS",
        "away": "Saints FC",
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
        "away": "Invisible United",
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
        "away": "Galatasaray",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Belgium",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "THE NAPOLIANS",
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
        "home": "Dont Worry",
        "away": "Heathens United",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Intra FC",
        "away": "Arsenal",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Manyora",
        "away": "Saints FC",
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
        "away": "Invisible United",
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
        "away": "Galatasaray",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "StreetwiseFC",
        "away": "Flava.AC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Madoda FC",
        "away": "THE NAPOLIANS",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Belgium",
        "away": "Notorious_bZ",
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
        "home": "Heathens United",
        "away": "Dont Worry",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Arsenal",
        "away": "Intra FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Saints FC",
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
        "home": "Invisible United",
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
        "home": "Galatasaray",
        "away": "Danger FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Flava.AC",
        "away": "StreetwiseFC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "THE NAPOLIANS",
        "away": "Madoda FC",
        "homeScore": null,
        "awayScore": null,
        "forfeit": false
      },
      {
        "home": "Notorious_bZ",
        "away": "Belgium",
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
    { season: "Season 1: Aug '26", team: "ATTACKERS" },
  ],
  domesticCup: [
    
  ],
  championsCup: [
  { season: "Season 1: Aug '26", team: "ATTACKERS" },
  ],
  conferenceCup: [
  
  ],
  superCup: [
   { season: "Season 1: Aug '26", team: "StreetwiseFC" },
  ],
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
  active: false,
  name: "Champions Cup",
  blurb: "Contested by the top 8 finishers in the eFootball League table at the end of the season.",
  rounds: [
    // { label: "Quarter-Finals", date: null, matches: [
    //   { home: "", away: "", homeScore: null, awayScore: null }, // 1st vs 8th
    // ] },
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
  "Dont Worry": { playstyle: "Quick Counter/ Out Wide", highestPosition: "6th", manager: "Xabi Alonso", user: "IceyF", titles: 0 },
  "StreetwiseFC": { playstyle: "Quick Counter", highestPosition: "2nd", manager: "Roberto Martinez", user: "StreetwiseFC", titles: 1 },
  "ATTACKERS": { playstyle: "Possession", highestPosition: "1st (Current Champion)", manager: "Thomas Tuchel", user: "khuseloBusquets", titles: 2 },
  "Danger FC": { playstyle: "Long Ball Counter", highestPosition: "4th", manager: "Frank Beckenbauer", user: "Lambo", titles: 0 },
  "Heathens United": { playstyle: "Possession / Overload", highestPosition: "12th", manager: "Frank Lampard/Cesc Fasegas", user: "Don Ladino", titles: 0 },
  "STRZ": { playstyle: "Outwide", highestPosition: "8th", manager: "Ruben Amorim", user: "Lueelo_lynx", titles: 0 },
  "Intra FC": { playstyle: "", highestPosition: "13th", manager: "", user: "Scully03", titles: 0 },
  "Spartanburg FC": { playstyle: "Quick Counter", highestPosition: "14th", manager: "Jurgen Klopp", user: "carelessk3lvin", titles: 0 },
  "Busby Babes": { playstyle: "Quick Counter", highestPosition: "9th", manager: "Antonio Conte", user: "W1ZZYUCHIHA", titles: 0 },
  "Sabah FC ": { playstyle: "", highestPosition: "11th", manager: "", user: "swafiscents", titles: 0 },
  // FIXED: this used to be keyed "sfundoFC" (no space), which didn't match
  // the "sfundo FC" (with space) used in TEAMS -- the info panel was
  // silently failing for this team. Key now matches exactly.
  "sfundo FC": { playstyle: "Quick Counter", highestPosition: "3rd", manager: "Jose Mourinho", user: "Mapholoba", titles: 0 },
  "Madoda FC": { playstyle: "Long Ball", highestPosition: "5th", manager: "Didler Deschamps", user: "EmperorZoocci", titles: 0 },
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
    body: "Contested by the League Champion vs the Champions Cup winner. If the same team wins both, 2nd place in the League steps in instead.<br> Cup is contested in one match set to extra time and penalties."
  },
  {
    heading: "Qualification — Champions Super Cup",
    body: "Contested by the Champions Cup winner vs the Conference Cup winner.<br> Cup is contested in one match set to extra time and penalties."
  },
  {
    heading: "Match Scheduling & Forfeits",
    body: "After those times, match is a draw on both competing teams on both home and away legs given both did not reach out, however if you reach out and your opponent does not respond, then its a 3-0 win for you in both home and away legs.  If a player has an emergency(family, work, school, network) they should communicate prior to the close of the matchday to avoid unfair forfeits (Grace Period is 3 matches max(3 days), if you exceed the 3 match reschedule you will draw 0-0 all those the matches and you will count as a non-responding player and will be subject to the Forfeit clause)  If a player is suspected of using SMART ASSIST, they will be subject to a 10 point deduction at the end of the season if multiple offences ensue then immediate relegation or expulsion from the league will be put to a vote."
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