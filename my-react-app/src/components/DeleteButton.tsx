import { useEffect, useState} from 'react'

const DeleteButton = () => {

  const [feedback, setFeedback] = useState(null);

  //useEffect(() => {
  //fetch('', { method: 'DELETE' })
  //     .then(() => setFeedback('Deleted successfuly'));
//}, []);


  return (
    <div className="delete-button">
      <button className="ClosetButtons" onClick={() => ( {type: 'delete'} )}>REMOVE</button>
      <span id="feedback">{feedback}</span>
    </div>
  );
}
export default DeleteButton;
