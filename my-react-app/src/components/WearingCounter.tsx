import {useState, useRef } from 'react'
import '../CSS/MyCloset.css'
 
function WearingCounter() {
  const setCounter = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };

  const [showDatePicker, setShowDatePicker] = useState(false);
  
  const toggleDatePicker = () => {
    showDatePicker ?
      setShowDatePicker(false) : setShowDatePicker(true)
  }
    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);
  
    const handleChange = (e) => {
      setDate(e.target.value);
    };
  
 
  return (
    <div className="counter">
      <div className="btn__container">
      <button className='ClosetButtons' onClick={() => toggleDatePicker()}> MARK AS WORN </button>
      </div>
      <div id='datepicker'>
      { showDatePicker?
        ( <input
          type="date"
          onChange={handleChange}
          ref={dateInputRef}
        /> )
        : null}
        </div>
    </div>
  );
}

export default WearingCounter