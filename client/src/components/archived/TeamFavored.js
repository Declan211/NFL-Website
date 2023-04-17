import MultiSelect from 'multiselect-react-dropdown'

function TeamFavored() {
    return (
        <MultiSelect
  displayValue="key"
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
        key: 'Buffalo Bills'
      },
      {
        cat: 'AFC East',
        key: 'New England Patriots'
      },
      {
        cat: 'AFC East',
        key: 'Miami Dolphins'
      },
      {
        cat: 'AFC East',
        key: 'New York Jets'
      },
      {
        cat: 'AFC West',
        key: 'Kansas City Chiefs'
      },
      {
        cat: 'AFC West',
        key: 'Los Angeles Chargers'
      },
      {
        cat: 'AFC West',
        key: 'Las Vegas Raiders'
      },
      {
        cat: 'AFC West',
        key: 'Denver Broncos'
      },
      {
        cat: 'AFC North',
        key: 'Baltimore Ravens'
      },
      {
        cat: 'AFC North',
        key: 'Cincinatti Bengals'
      },
      {
        cat: 'AFC North',
        key: 'Pittsburgh Steelers'
      },
      {
        cat: 'AFC North',
        key: 'Cleveland Browns'
      },
      {
        cat: 'AFC South',
        key: 'Jacksonville Jaguars'
      },
      {
        cat: 'AFC South',
        key: 'Tennessee Titans'
      },
      {
        cat: 'AFC South',
        key: 'Indianapolis Colts'
      },
      {
        cat: 'AFC South',
        key: 'Houston Texans'
      },
      {
        cat: 'NFC East',
        key: 'Philadelphia Eagles'
      },
      {
        cat: 'NFC East',
        key: 'Dallas Cowboys'
      },
      {
        cat: 'NFC East',
        key: 'New York Giants'
      },
      {
        cat: 'NFC East',
        key: 'Washington Commanders'
      },
      {
        cat: 'NFC West',
        key: 'San Francisco 49ers'
      },
      {
        cat: 'NFC West',
        key: 'Seattle Seahawks'
      },
      {
        cat: 'NFC West',
        key: 'Arizona Cardinals'
      },
      {
        cat: 'NFC North',
        key: 'Minnesota Vikings'
      },
      {
        cat: 'NFC North',
        key: 'Detroit Lions'
      },
      {
        cat: 'NFC North',
        key: 'Green Bay Packers'
      },
      {
        cat: 'NFC North',
        key: 'Chicago Bears'
      },
      {
        cat: 'NFC South',
        key: 'Tampa Bay Buccaneers'
      },
      {
        cat: 'NFC South',
        key: 'New Orleans Saints'
      },
      {
        cat: 'NFC South',
        key: 'Carolina Panthers'
      },
      {
        cat: 'NFC South',
        key: 'Atlanta Falcons'
      },

  ]}
  singleSelect
/>
    )
}
export default TeamFavored