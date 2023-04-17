import React, { useState, useContext } from "react";
import './Home.css'
import GamesList from './GamesList'
import { favoredOptions } from './options'
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'
import { selectTeamsOptions } from "./options";
import { seasonOptions } from "./options"
import { weekOptions } from "./options";
import { pointSpreadOptions } from "./options";
import GameFinder from "../APIs/GameFinder";

function Home() {

        //initiate variables for the dropdown/input boxes
        const [selectFavored, setSelectFavored] = useState("");
        const [bottom_over_under, setBottom_over_under] = useState("");
        const [upper_over_under, setUpper_over_under] = useState("");
        const [bottom_differential, setBottom_differential] = useState("");
        const [upper_differential, setUpper_differential] = useState("");
        const [bottom_wind, setBottom_wind] = useState("");
        const [upper_wind, setUpper_wind] = useState("");
        const [bottom_temp, setBottom_temp] = useState("");
        const [upper_temp, setUppertemp] = useState("");
        const [selectTeam, setSelectTeam] = useState("");
        const [selectTeam2, setSelectTeam2] = useState("");
        const [selectSeason, setSelectSeason] = useState("");
        const [selectSeason2, setSelectSeason2] = useState("");
        const [selectWeek, setSelectWeek] = useState("");
        const [selectPointSpread, setSelectPointSpread] = useState("");
        const [selectPointSpread2, setSelectPointSpread2] = useState(""); 

        //function for when the "apply" button is clicked - posts input data to server API
        const handleApply = async (e) => {
                e.preventDefault();
                try {
                  const response = await GameFinder.post("http://localhost:3005/api/v1/games/data", {
                    selectTeam, 
                    selectTeam2,
                    selectSeason,
                    selectSeason2,
                    selectWeek,
                    selectPointSpread,
                    selectPointSpread2,
                    selectFavored,
                    bottom_over_under,
                    upper_over_under,
                    bottom_differential,
                    upper_differential,
                    bottom_wind,
                    upper_wind,
                    bottom_temp,
                    upper_temp,
                  });
                } catch (err) {
                  console.log(err);
                }
                window.location.reload();
              };



              //sets fields to their chosen values
        const handleOnChangeFavoredTeam = selectFavored => {
                setSelectFavored(selectFavored);
        }
        const handleOnChangeSelectTeam = selectTeam => {
                setSelectTeam(selectTeam);
        }
        const handleOnChangeSelectTeam2 = selectTeam2 => {
                setSelectTeam2(selectTeam2);
        }
        const handleOnChangeSeason = selectSeason => {
                setSelectSeason(selectSeason);
        }
        const handleOnChangeSeason2 = selectSeason2 => {
                setSelectSeason2(selectSeason2);
        }
        const handleOnChangeWeek = selectWeek => {
                setSelectWeek(selectWeek);
        }
        const handleOnChangePointSpread = selectPointSpread => {
                setSelectPointSpread(selectPointSpread);
        }
        const handleOnChangePointSpread2 = selectPointSpread2 => {
                setSelectPointSpread2(selectPointSpread2);
        }

        
    return (
        
        
    <>
           
            
    <div className='home-container'>
        <div className='teams'>
            <h1>Teams</h1>
            <div>
                <MultiSelect 
                onChange={handleOnChangeSelectTeam}
                options={ selectTeamsOptions }
                />
        </div>
            <p1 className='vs'>VS.</p1>
            <div>
                <MultiSelect 
                onChange={handleOnChangeSelectTeam2}
                options={ selectTeamsOptions }
                />
        </div>
            </div> 
        <div className='dates'>
            <h1>Date</h1>
            <p1>From Season</p1>
                <MultiSelect 
                onChange={handleOnChangeSeason}
                options={ seasonOptions }
                singleSelect='true'
                closeOnSelect='true'
                />
            <p1>To Season</p1>
                <MultiSelect 
                onChange={handleOnChangeSeason2}
                options={ seasonOptions }
                singleSelect='true'
                closeOnSelect='true'
                />
            <p1>Week</p1>
                <MultiSelect 
                onChange={handleOnChangeWeek}
                options={ weekOptions }
                />
        </div>
        <div className='betting'>
            <h1>Betting</h1>
            <p1>Point Spread</p1>
            <br />
            <p1>From</p1>
                <MultiSelect 
                onChange={handleOnChangePointSpread}
                options={ pointSpreadOptions }
                singleSelect='true'
                closeOnSelect='true'
                />
            <p1>To</p1>
                <MultiSelect 
                onChange={handleOnChangePointSpread2}
                options={ pointSpreadOptions }
                singleSelect='true'
                closeOnSelect='true'
                />
            <p1>Favored Team</p1>
                <MultiSelect 
                onChange={handleOnChangeFavoredTeam}
                options={ favoredOptions }
                singleSelect='true'
                closeOnSelect='true'
                />
            <p1>Over/Under</p1>
            <br />
            <p1>From</p1>
            <input type="text"
                    value={bottom_over_under}
                    onChange={(e) => setBottom_over_under(e.target.value)} />
            <p1>To</p1>
            <input type="text"
                    value={upper_over_under}
                    onChange={(e) => setUpper_over_under(e.target.value)} />
            <br />
            <p1>Resulting Point Differential</p1>
            <br />
            <p1>From</p1>
            <input type='text'
                    value={bottom_differential}
                    onChange={(e) => setBottom_differential(e.target.value)}
                     />
            <p1>To</p1>
            <input type='text'
                    value={upper_differential}
                    onChange={(e) => setUpper_differential(e.target.value)} />
        </div>
        <div className='Weather'>
            <h1>Weather</h1>
            <p1>Wind (MPH)</p1>
            <br />
            <p1>From</p1>
            <input type="text"
                    value={bottom_wind}
                    onChange={(e) => setBottom_wind(e.target.value)}/>
            <p1>To</p1>
            <input type="text" 
                    value={upper_wind}
                    onChange={(e) => setUpper_wind(e.target.value)}/>
            <br />
            <p1>Temperature (°F)</p1>
            <br />
            <p1>From</p1>
            <input type="text" 
                    value={bottom_temp}
                    onChange={(e) => setBottom_temp(e.target.value)}/>
            <p1>To</p1>
            <input type="text"
                    value={upper_temp}
                    onChange={(e) => setUppertemp(e.target.value)} />
        </div>
        <br />
        <button
            onClick={handleApply}
            type="submit"
            className="btn btn-primary"
          >
            Apply
          </button>
        <br />
        <GamesList />
         
         </div>
    </>
    )
}

export default Home;