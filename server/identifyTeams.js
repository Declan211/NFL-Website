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
export {identifyIDs, allTeams}