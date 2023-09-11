const DeleteButton = () => {


  return (
    <div className="delete-button">
      <button className="ClosetButtons" onClick={() => ( {type: 'REMOVE_ITEM'} )}>REMOVE</button>
    </div>
  );
}

export default DeleteButton;
