require("dotenv").config();
const express = require('express')
const db = require('./db')
const morgan = require('morgan')
const app = express()
const cors = require("cors");
const { query } = require("express");


app.use(express.json())
app.use(cors())
 

//initialize the query as "" 
var inQuery = ""

//Pull the user inputs from the React front end using app.post
app.post("/api/v1/games/data", async (req, res) => {
        const team1 = req.body.selectTeam.split(",")
        const team2 = req.body.selectTeam2.split(",")
        const seasonFrom = req.body.selectSeason
        const seasonTo = req.body.selectSeason2
        const WeeksArray = req.body.selectWeek.split(",")
        const spreadFrom = req.body.selectPointSpread
        const spreadTo = req.body.selectPointSpread2
        const favored = req.body.selectFavored
        const over_underFrom = req.body.bottom_over_under
        const over_underTo = req.body.upper_over_under
        const diffFrom = req.body.bottom_differential
        const diffTo = req.body.upper_differential
        const windFrom = req.body.bottom_wind
        const windTo = req.body.upper_wind
        const tempFrom = req.body.bottom_temp
        const tempTo = req.body.upper_temp
        
        //initialize query to be built upon
        inQuery = `SELECT DISTINCT * FROM "NFL_GAMES" WHERE schedule_season >= 1966`
        
        //if input for team 1 but not team 2
            if (team1[0] != "" && team2[0] == "") {
                var start = ` AND (team_home = '-1'`
                for (i = 0; i < team1.length; i++) {
                    if (team1[i].includes("Home Team")) {
                        var hometeam = team1[i].substring(12)
                        var array = allTeams(hometeam) //get all names in the franchise's history
                        for (j = 0; j < array.length; j++) {
                            start = start.concat(` OR team_home = '${array[j]}'`)
                        }
                    } else {
                        var awayteam = team1[i].substring(12)
                        var array = allTeams(awayteam)
                        for (k = 0; k < array.length; k++) {
                            start = start.concat(` OR team_away = '${array[k]}'`)
                        }
                    }
                }
                start = start.concat(")");
                inQuery = inQuery.concat(start); 
            }

            //team 1 is null, team 2 has a value
            if (team1[0] == "" && team2[0] != "") {
                var start = ` AND (team_home = '-1'`
                for (i = 0; i < team2.length; i++) {
                    if (team2[i].includes("Home Team")) {
                        var hometeam = team2[i].substring(12)
                        var array = allTeams(hometeam)
                        for (j = 0; j < array.length; j++) {
                            start = start.concat(` OR team_home = '${array[j]}'`)
                        }
                    } else {
                        var awayteam = team2[i].substring(12)
                        var array = allTeams(awayteam)
                        for (k = 0; k < array.length; k++) {
                            start = start.concat(` OR team_away = '${array[k]}'`)
                        }
                    }
                }
                start = start.concat(")");
                inQuery = inQuery.concat(start);
            }
            
            //input for both team 1 and team 2, could abstract in the future
            if (team1[0] != "" && team2[0] != "") {
                var start = ` AND ((team_home = '-1'`
                for (i = 0; i < team1.length; i++) {
                    if (team1[i].includes("Home Team")) {
                        var hometeam = team1[i].substring(12)
                        var array = allTeams(hometeam)
                        for (j = 0; j < array.length; j++) {
                            start = start.concat(` OR team_home = '${array[j]}'`)
                        }
                    } else {
                        var awayteam = team1[i].substring(12)
                        var array = allTeams(awayteam)
                        for (k = 0; k < array.length; k++) {
                            start = start.concat(` OR team_away = '${array[k]}'`)
                        }
                    }
                }
                start = start.concat(`) AND (team_home = '-1'`);
                for (i = 0; i < team2.length; i++) {
                    if (team2[i].includes("Home Team")) {
                        var hometeam = team2[i].substring(12)
                        var array = allTeams(hometeam)
                        for (j = 0; j < array.length; j++) {
                            start = start.concat(` OR team_home = '${array[j]}'`)
                        }
                    } else {
                        var awayteam = team2[i].substring(12)
                        var array = allTeams(awayteam)
                        for (k = 0; k < array.length; k++) {
                            start = start.concat(` OR team_away = '${array[k]}'`)
                        }
                    }
                }
                start = start.concat(`))`)
                inQuery = inQuery.concat(start)
            }


        
            if (seasonFrom != "") {
                inQuery = inQuery.concat(` AND schedule_season >= '${seasonFrom}'`)
            }
            if (seasonTo != "") {
                inQuery = inQuery.concat(` AND schedule_season <= '${seasonTo}'`)
            }
            if (WeeksArray[0] != "") {
                var start = ` AND (schedule_week = '-1'`
                for (let i = 0; i < WeeksArray.length; i++) {
                    var week = WeeksArray[i];
                    start = start.concat(` OR schedule_week = '${week}'`)
                }
                start = start.concat(")");
                inQuery = inQuery.concat(start);
            }
            if (spreadFrom != "") {
                inQuery = inQuery.concat(` AND spread_favorite <= '${spreadFrom}'`)
            }
            if (spreadTo != "") {
                inQuery = inQuery.concat(` AND spread_favorite >= '${spreadTo}'`)
            }
            if (favored != "") {
                var ID = identifyIDs(favored)
                inQuery = inQuery.concat(` AND team_favorite_id = '${ID}'`)
            }
            if (over_underFrom != "") {
                inQuery = inQuery.concat(`AND over_under_line >= '${over_underFrom}'`)
            }
            if (over_underTo != "") {
                inQuery = inQuery.concat(` AND over_under_line <= '${over_underTo}'`)
            }
            if (diffFrom != "") {
                inQuery = inQuery.concat(`AND ABS(score_home - score_away) >= '${diffFrom}'`)
            }
            if (diffTo != "") {
                inQuery = inQuery.concat(` AND ABS(score_home - score_away) <= '${diffTo}'`)
            }
            if (windFrom != "") {
                inQuery = inQuery.concat(` AND weather_wind_mph >= '${windFrom}'`)
            }
            if (windTo != "") {
                inQuery = inQuery.concat(`AND weather_wind_mph <= '${windTo}'`)
            }
            if (tempFrom != "") {
                inQuery = inQuery.concat(` AND weather_temperature >= '${tempFrom}'`)
            }
            if (tempTo != "") {
                inQuery = inQuery.concat(` AND weather_temperature <= '${tempTo}'`)
            }
       
        console.log(inQuery) //to ensure that the correct query is inputted

        try {
            const entries = await db.query(inQuery) //input the query into the SQL database
            res.status(201).json({
                status: "success",
                results: entries.rows.length,
                data: {
                    games: entries.rows,
                },
            })
            } catch(err) {
                console.log(err);
            }

    
  });

  //send the output of the query to the front end 
  app.get("/api/v1/games/list", async (req, res) => {
    try {
    const entries = await db.query(inQuery)
    //console.log(entries.rows)
    res.status(201).json({
        status: "success",
        results: entries.rows.length,
        data: {
            games: entries.rows,
        },
    })
    } catch(err) {
        console.log(err);
    }
})
  
//define port
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`)
})

//given a team, return the teams ID. Used to determine the favored team. 
function identifyIDs(team) {
    if (team == 'Arizona Cardinals') {
        return "ARI"
    }
    if (team == 'Atlanta Falcons') {
        return "ATL"
    }
    if (team == 'Baltimore Ravens') {
        return "BAL"
    }
    if (team == 'Buffalo Bills') {
        return "BUF"
    }
    if (team == 'Carolina Panthers') {
        return "CAR"
    }
    if (team == 'Chicago Bears') {
        return "ARI"
    }
    if (team == 'Cincinnati Bengals') {
        return "CIN"
    }
    if (team == 'Cleveland Browns') {
        return "CLE"
    }
    if (team == 'Dallas Cowboys') {
        return "DAL"
    }
    if (team == 'Denver Broncos') {
        return "DEN"
    }
    if (team == 'Detriot Lions') {
        return "DET"
    }
    if (team == 'Green Bay Packers') {
        return "GB"
    }
    if (team == 'Houston Texans') {
        return "HOU"
    }
    if (team == 'Indianapolis Colts') {
        return "IND"
    }
    if (team == 'Jacksonville Jaguars') {
        return "JAX"
    }
    if (team == 'Kansas City Chiefs') {
        return "KC"
    }
    if (team == 'Las Vegas Raiders') {
        return "LVR"
    }
    if (team == 'Los Angeles Chargers') {
        return "LAC"
    }
    if (team == 'Los Angeles Rams') {
        return "LAR"
    }
    if (team == 'Miami Dolphins') {
        return "MIA"
    }
    if (team == 'Minnesota Vikings') {
        return "MIN"
    }
    if (team == 'New England Patriots') {
        return "NE"
    }
    if (team == 'New Orleans Saints') {
        return "NO"
    }
    if (team == 'New York Giants') {
        return "NYG"
    }
    if (team == 'New York Jets') {
        return "NYJ"
    }
    if (team == 'Philadelphia Eagles') {
        return "PHI"
    }
    if (team == 'Pittsburgh Steelers') {
        return "PIT"
    }
    if (team == 'San Francisco 49ers') {
        return "SF"
    }
    if (team == 'Seattle Seahawks') {
        return "SEA"
    }
    if (team == 'Tampa Bay Buccaneers') {
        return "TB"
    }
    if (team == 'Houston Texas') {
        return "HOU"
    }
    if (team == 'Tennessee Titans') {
        return "TEN"
    }
    if (team == 'Washington Commanders') {
        return "HOU"
    }
}

//given a current team, return all of the team names in that franchise's history
function allTeams(team) {
    if (team == 'Arizona Cardinals') {
        return ["Arizona Cardinals", "Phoenix Cardinals", "St. Louis Cardinals"]
    }
    if (team == 'Atlanta Falcons') {
        return ["Atlanta Falcons"]
    }
    if (team == 'Baltimore Ravens') {
        return ["Baltimore Ravens"]
    }
    if (team == 'Buffalo Bills') {
        return ["Buffalo Bills"]
    }
    if (team == 'Carolina Panthers') {
        return ["Carolina Panthers"]
    }
    if (team == 'Chicago Bears') {
        return ["Chicago Bears"]
    }
    if (team == 'Cincinnati Bengals') {
        return ["Cincinnati Bengals"]
    }
    if (team == 'Cleveland Browns') {
        return ["Cleveland Browns"]
    }
    if (team == 'Dallas Cowboys') {
        return ["Dallas Cowboys"]
    }
    if (team == 'Denver Broncos') {
        return ["Denver Broncos"]
    }
    if (team == 'Detriot Lions') {
        return ["Detriot Lions"]
    }
    if (team == 'Green Bay Packers') {
        return ["Green Bay Packers"]
    }
    if (team == 'Houston Texans') {
        return ["Houston Texans"]
    }
    if (team == 'Indianapolis Colts') {
        return ["Baltimore Colts", "Indianapolis Colts"]
    }
    if (team == 'Jacksonville Jaguars') {
        return ["Jacksonville Jaguars"]
    }
    if (team == 'Kansas City Chiefs') {
        return ["Kansas City Chiefs"]
    }
    if (team == 'Las Vegas Raiders') {
        return ["Las Vegas Raiders", "Los Angeles Raiders", "Oakland Raiders"]
    }
    if (team == 'Los Angeles Chargers') {
        return ["San Diego Chargers", "Los Angeles Chargers"]
    }
    if (team == 'Los Angeles Rams') {
        return ["St. Louis Rams", "Los Angeles Rams"]
    }
    if (team == 'Miami Dolphins') {
        return ["Miami Dolphins"]
    }
    if (team == 'Minnesota Vikings') {
        return ["Minnesota Vikings"]
    }
    if (team == 'New England Patriots') {
        return ["Boston Patriots", "New England Patriots"]
    }
    if (team == 'New Orleans Saints') {
        return ["New Orleans Saints"]
    }
    if (team == 'New York Giants') {
        return ["New York Giants"]
    }
    if (team == 'New York Jets') {
        return ["New York Jets"]
    }
    if (team == 'Philadelphia Eagles') {
        return [team]
    }
    if (team == 'Pittsburgh Steelers') {
        return [team]
    }
    if (team == 'San Francisco 49ers') {
        return [team]
    }
    if (team == 'Seattle Seahawks') {
        return [team]
    }
    if (team == 'Tampa Bay Buccaneers') {
        return [team]
    }
    if (team == 'Tennessee Titans') {
        return [team, "Tennessee Oilers", "Houston Oilers"]
    }
    if (team == 'Washington Commanders') {
        return [team, "Washington Football Team", "Washington Redskins"]
    }
}


