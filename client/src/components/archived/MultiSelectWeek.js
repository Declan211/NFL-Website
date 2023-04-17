import MultiSelect from 'multiselect-react-dropdown'


function SelectWeek() {
 
  return (
    <>
    <select>

    </select>
        <MultiSelect
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
        key: 'Super Bowl'
      },
      {
        key: 'Conference Championship'
      },
      {
        key: 'Divisional'
      },
      {
        key: 'Wildcard'
      },
      {
        key: '18'
      },
      {
        key: '17'
      },
      {
        key: '16'
      },
      {
        key: '15'
      },
      {
        key: '14'
      },
      {
        key: '13'
      },
      {
        key: '12'
      },
      {
        key: '11'
      },
      {
        key: '10'
      },
      {
        key: '9'
      },
      {
        key: '8'
      },
      {
        key: '7'
      },
      {
        key: '6'
      },
      {
        key: '5'
      },
      {
        key: '4'
      },

      {
        key: '3'
      },
      {
        key: '2'
      },
      {
        key: '1' 
      },
  ]}
  showCheckbox
/>
  
     </>
  )
}

export default SelectWeek