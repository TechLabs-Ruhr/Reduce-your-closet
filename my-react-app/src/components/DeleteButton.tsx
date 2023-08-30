const DeleteButton = ({ id }) => {


  return (
    <div className="item-buttons delete-button">
      <button onClick={() => ( {type: 'REMOVE_ITEM', id: id} )}>REMOVE</button>
    </div>
  );
}

export default DeleteButton;