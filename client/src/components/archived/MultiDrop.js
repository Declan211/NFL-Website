import MultiSelect from 'multiselect-react-dropdown'


function MultiDrop() {
  return (
    <>
        <MultiSelect className='multiselect'
  displayValue="key"
  groupBy="cat"
  onKeyPressFn={function noRefCheck(){}}
  onRemove={function noRefCheck(){}}
  onSearch={function noRefCheck(){}}
  onSelect={function noRefCheck(){}}
  options={[
    {
      key: 'Not Relevant'
    },
    {
      cat: 'AFC East',
      key: 'Home Team - Buffalo Bills'
    },
    {
      cat: 'AFC East',
      key: 'Away Team - Buffalo Bills'
    },
    {
      cat: 'AFC East',
      key: 'Home Team - New England Patriots'
    },
    {
      cat: 'AFC East',
      key: 'Away Team - New England Patriots'
    },
    {
      cat: 'AFC East',
      key: 'Home Team - Miami Dolphins'
    },
    {
      cat: 'AFC East',
      key: 'Away Team - Miami Dolphins'
    },
    {
      cat: 'AFC East',
      key: 'Home Team - New York Jets'
    },
    {
      cat: 'AFC East',
      key: 'Away Team - New York Jets'
    },
    {
      cat: 'AFC West',
      key: 'Home Team - Kansas City Chiefs'
    },
    {
      cat: 'AFC West',
      key: 'Away Team - Kansas City Chiefs'
    },
    {
      cat: 'AFC West',
      key: 'Home Team - Los Angeles Chargers'
    },
    {
      cat: 'AFC West',
      key: 'Away Team - Los Angeles Chargers'
    },
    {
      cat: 'AFC West',
      key: 'Home Team - Las Vegas Raiders'
    },
    {
      cat: 'AFC West',
      key: 'Away Team - Las Vegas Raiders'
    },
    {
      cat: 'AFC West',
      key: 'Home Team - Denver Broncos'
    },
    {
      cat: 'AFC West',
      key: 'Away Team - Denver Broncos'
    },
    {
      cat: 'AFC North',
      key: 'Home Team - Baltimore Ravens'
    },
    {
      cat: 'AFC North',
      key: 'Away Team - Baltimore Ravens'
    },
    {
      cat: 'AFC North',
      key: 'Home Team - Cincinatti Bengals'
    },
    {
      cat: 'AFC North',
      key: 'Away Team - Cincinatti Bengals'
    },
    {
      cat: 'AFC North',
      key: 'Home Team - Pittsburgh Steelers'
    },
    {
      cat: 'AFC North',
      key: 'Away Team - Pittsburgh Steelers'
    },
    {
      cat: 'AFC North',
      key: 'Home Team - Cleveland Browns'
    },
    {
      cat: 'AFC North',
      key: 'Away Team - Cleveland Browns'
    },
    {
      cat: 'AFC South',
      key: 'Home Team - Jacksonville Jaguars'
    },
    {
      cat: 'AFC South',
      key: 'Away Team - Jacksonville Jaguars'
    },
    {
      cat: 'AFC South',
      key: 'Home Team - Tennessee Titans'
    },
    {
      cat: 'AFC South',
      key: 'Away Team - Tennessee Titans'
    },
    {
      cat: 'AFC South',
      key: 'Home Team - Indianapolis Colts'
    },
    {
      cat: 'AFC South',
      key: 'Away Team - Indianapolis Colts'
    },
    {
      cat: 'AFC South',
      key: 'Home Team - Houston Texans'
    },
    {
      cat: 'AFC South',
      key: 'Away Team - Houston Texans'
    },
    {
      cat: 'NFC East',
      key: 'Home Team - Philadelphia Eagles'
    },
    {
      cat: 'NFC East',
      key: 'Away Team - Philadelphia Eagles'
    },
    {
      cat: 'NFC East',
      key: 'Home Team - Dallas Cowboys'
    },
    {
      cat: 'NFC East',
      key: 'Away Team - Dallas Cowboys'
    },
    {
      cat: 'NFC East',
      key: 'Home Team - New York Giants'
    },
    {
      cat: 'NFC East',
      key: 'Away Team - New York Giants'
    },
    {
      cat: 'NFC East',
      key: 'Home Team - Washington Commanders'
    },
    {
      cat: 'NFC East',
      key: 'Away Team - Washington Commanders'
    },
    {
      cat: 'NFC West',
      key: 'Home Team - San Francisco 49ers'
    },
    {
      cat: 'NFC West',
      key: 'Away Team - San Franciso 49ers'
    },
    {
      cat: 'NFC West',
      key: 'Home Team - Seattle Seahawks'
    },
    {
      cat: 'NFC West',
      key: 'Away Team - Seattle Seahawks'
    },
    {
      cat: 'NFC West',
      key: 'Home Team - Los Angeles Rams'
    },
    {
      cat: 'NFC West',
      key: 'Away Team - Los Angeles Rams'
    },
    {
      cat: 'NFC West',
      key: 'Home Team - Arizona Cardinals'
    },
    {
      cat: 'NFC West',
      key: 'Away Team - Arizona Cardinals'
    },
    {
      cat: 'NFC North',
      key: 'Home Team - Minnesota Vikings'
    },
    {
      cat: 'NFC North',
      key: 'Away Team - Minnesota Vikings'
    },
    {
      cat: 'NFC North',
      key: 'Home Team - Detroit Lions'
    },
    {
      cat: 'NFC North',
      key: 'Away Team - Detroit Lions'
    },
    {
      cat: 'NFC North',
      key: 'Home Team - Green Bay Packers'
    },
    {
      cat: 'NFC North',
      key: 'Away Team - Green Bay Packers'
    },
    {
      cat: 'NFC North',
      key: 'Home Team - Chicago Bears'
    },
    {
      cat: 'NFC North',
      key: 'Away Team - Chicago Bears'
    },
    {
      cat: 'NFC South',
      key: 'Home Team - Tampa Bay Buccaneers'
    },
    {
      cat: 'NFC South',
      key: 'Away Team - Tampa Bay Buccaneers'
    },
    {
      cat: 'NFC South', 
      key: 'Home Team - New Orleans Saints'
    },
    {
      cat: 'NFC South',
      key: 'Away Team - New Orleans Saints'
    },
    {
      cat: 'NFC South',
      key: 'Home Team - Carolina Panthers'
    },
    {
      cat: 'NFC South',
      key: 'Away Team - Carolina Panthers'
    },
    {
      cat: 'NFC South',
      key: 'Home Team - Atlanta Falcons'
    },
    {
      cat: 'NFC South',
      key: 'Away Team - Atlanta Falcons'
    },
  ]}
  showCheckbox
/>
  
     </>
  )
}

export default MultiDrop