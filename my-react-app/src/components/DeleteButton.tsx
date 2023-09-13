const DeleteButton = () => {

//Delete button, 
//Item should be DELETED from database on Click remove button
//HTTP DELETE Request Method

  return (
    <div className="delete-button">
      <button className="ClosetButtons" onClick={() => ( {type: 'remove'} )}>REMOVE</button>
    </div>
  );
}

export default DeleteButton;
