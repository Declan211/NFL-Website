import React, { useEffect, useContext } from "react";
//import { useHistory } from "react-router-dom";
import GameFinder from "../APIs/GameFinder";
import { GamesContext } from "../context/GamesContext";



const GamesList = (props) => {
    const {games, setGames} = useContext(GamesContext)
    useEffect(() => {
        const fetchData = async () => {
            try {
                //gets game data sent from the front end after the query
                const response = await GameFinder.get("/list")
                setGames(response.data.data.games)
                console.log(response)
            } catch(err) {

            }
        }
            fetchData() 
    }, [])  
    
    
    
       
    //grabs desired values from the game data which we want to display
    return (
        <div className='list-group'>
            <table className= "table table-hover table-dark">
            <thead>
          <tr className="bg-primary">
            <th scope="col">Date</th>
            <th scope="col">Week</th>
            <th scope="col">Season</th>
            <th scope="col">Home Team</th>
            <th scope="col">Home Score</th>
            <th scope="col">Away Score</th>
            <th scope="col">Away Team</th>
            <th scope="col">Point Spread</th>
            <th scope="col">Over/Under</th>
          </tr>
        </thead>
        <tbody>
            {games && games.map(game => {
                return (
                    <tr>
                    <td>{game.schedule_date}</td>
                    <td>{game.schedule_week}</td>
                    <td>{game.schedule_season}</td>
                    <td>{game.team_home}</td>
                    <td>{game.score_home}</td>
                    <td>{game.score_away}</td>
                    <td>{game.team_away}</td>
                    <td>{game.team_favorite_id} {game.spread_favorite}</td>
                    <td>{game.over_under_line}</td>
                </tr>
                )
            })}
        </tbody>
            </table>
        </div>
    )
}


export default GamesList