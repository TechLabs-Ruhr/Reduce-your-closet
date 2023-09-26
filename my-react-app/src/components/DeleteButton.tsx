import { useState} from 'react'

type ClothId ={cloth_id:number, UpdateClothes: ()=>void}
const DeleteButton = (props: ClothId) => {

  const [feedback, setFeedback] = useState(null);


const DeleteCloth = (cloth_id: number) => { 
      const requestDate = {
          method: 'DELETE', 
          headers: {
              'Content-Type': 'application/json',
          }
      };
      fetch(`http://localhost:8080/delete_piece/${cloth_id}`,requestDate)
      props.UpdateClothes ()
  }; 


  return (
    <div className="delete-button">
      <button className="ClosetButtons" onClick={() => DeleteCloth(props.cloth_id)}>REMOVE</button>
      <span id="feedback">{feedback}</span>
    </div>
  );
}
export default DeleteButton;
