import { useEffect, useState} from 'react'

const DeleteButton = () => {

  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    // DELETE request using fetch inside useEffect React hook
    fetch('localhost:8080/clth/all', { method: 'DELETE' })
        .then(() => setFeedback('Deleted successfuly'));
}, []);


  return (
    <div className="delete-button">
      <button className="ClosetButtons" onClick={() => ( {type: 'delete'} )}>REMOVE</button>
      <span id="feedback">{feedback}</span>
    </div>
  );
}
export default DeleteButton;
