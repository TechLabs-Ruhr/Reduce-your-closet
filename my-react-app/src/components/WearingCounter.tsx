import {useState, useEffect} from 'react'
import '../CSS/MyCloset.css'
 
function WearingCounter() {

//Wearing Counter, 
//User should be able to choose date when item was worn
//User should be able to mark item as worn on Click using SUBMIT BUTTON, 
//data about wearing should be stored and after used for wearing STATITICS (separated page named MY STATISTICS)
//HTTP POST or PATCH Request Method (i am not quite sure here, cause its new data about existing item)

  const [showDatePicker, setShowDatePicker] = useState(false);
  
    {/* DATE PICKER */}
  const toggleDatePicker = () => {
    showDatePicker ?
      setShowDatePicker(false) : setShowDatePicker(true)
  }
    const [date, setDate] = useState('');

    {/* DATE CHANGE */}
    const handleChange = (e:any) => {
      date [0];
      setDate(e.target.value);
    };

    {
     /* useEffect(() => {
          // POST request using fetch inside useEffect React hook
          const requestDate = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ title: 'React Hooks POST Request Example' })
          };
          fetch('', requestDate)
              .then(response => response.json())
              .then(data => setDate(data.id));
      }, []); */

  return (
    <div className="counter">
      <div className="buttonContainer">
          {/* MARK AS WORN BUTTON */}
      <button className='ClosetButtons' onClick={() => toggleDatePicker()}> MARK AS WORN </button>
      </div>
      <div id='datepicker'>
          {/* DATE PICKER */}
      { showDatePicker?
        ( <form onChange={handleChange}>
            <input type="date" />
          {/* SUBMIT BUTTON */}
            <button id="'SubmitButton" type='submit'> Submit </button>  
        </form> )
        : null}
        </div>
    </div>
  );
}
}

export default WearingCounter 