import {useState} from 'react'
import '../CSS/MyCloset.css'
 
function WearingCounter() {

  const [showDatePicker, setShowDatePicker] = useState(false);
  
  const toggleDatePicker = () => {
    showDatePicker ?
      setShowDatePicker(false) : setShowDatePicker(true)
  }
    const [date, setDate] = useState('');
  
    const handleChange = (e:any) => {
      date [0];
      setDate(e.target.value);
    };

  return (
    <div className="counter">
      <div className="buttonContainer">
      <button className='ClosetButtons' onClick={() => toggleDatePicker()}> MARK AS WORN </button>
      </div>
      <div id='datepicker'>
      { showDatePicker?
        ( <form onChange={handleChange}>
            <input type="date" />
            <button id="'SubmitButton" type='submit'> Submit </button>  
        </form> )
        : null}
        </div>
    </div>
  );
};

export default WearingCounter