import {useState, useRef } from 'react'
 
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
      <button onClick={() => toggleDatePicker()}> MARK AS WORN </button>
      </div>
      <div className='datepicker'>
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