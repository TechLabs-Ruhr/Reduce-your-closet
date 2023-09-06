const DeleteButton = ({ id }) => {


  return (
    <div className="delete-button">
      <button className="ClosetButtons" onClick={() => ( {type: 'REMOVE_ITEM', id: id} )}>REMOVE</button>
    </div>
  );
}

export default DeleteButton;
