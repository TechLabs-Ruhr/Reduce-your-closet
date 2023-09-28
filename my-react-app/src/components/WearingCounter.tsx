import {useState} from 'react'
import '../CSS/MyCloset.css'
 
type ClothId ={cloth_id:number, GetCPU: (value:number)=>void, UpdateClothes:()=>void}
function WearingCounter(props: ClothId) {

  const [showDatePicker, setShowDatePicker] = useState(false);
  
    {/* DATE PICKER */}
  const toggleDatePicker = () => {
    showDatePicker ?
      setShowDatePicker(false) : setShowDatePicker(true)
  }
    const [date, setDate] = useState('');

    {/* DATE CHANGE */}
    const handleChange = (e:any) => {
      setDate(e.target.value);
      console.log(typeof date)
    };

    {
    const SendDate = (cloth_id: number, timestamp: string) => { 
      console.log (date)
          const requestDate = {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json',
              }
          };
          fetch(`http://localhost:8080/clth/${cloth_id}/${timestamp}/adddate`,requestDate)
          .then (response => { props.GetCPU(cloth_id)
          })
      }; 

  return (
    <div className="counter">
          {/* MARK AS WORN BUTTON */}
      <div>
      <button className='ClosetButtons' onClick={() => toggleDatePicker()}> MARK AS WORN </button>
      </div>
   
      <div id='container'>
          {/* DATE PICKER */}
      { showDatePicker?
        ( <form onChange={handleChange}>
            <input id='datepicker'type="date" />
          {/* SUBMIT BUTTON */}
            <button id="confirm" type='button' onClick={() => SendDate(props.cloth_id, date)}> Submit </button>  
        </form> )
        : null}
      </div>
    </div>
  );
}}

  export default WearingCounter 