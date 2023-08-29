import { useState, useContext } from 'react';

const EditButton = ({ item }) => {


  const [showEditForm, setShowEditForm] = useState(false);
  const [editedItem, setEditedItem] = useState({
    color: '',
    brand: '',
    description: ''
  });

  const toggleEditForm = () => {
    showEditForm ?
      setShowEditForm(false) : setShowEditForm(true)
  }
  const handleDescChange = e => {
    setEditedItem({...editedItem, description: e.target.value});
  }
  const handleColorChange = e => {
    setEditedItem({...editedItem, color: e.target.value});
  }
  const handleBrandChange = e => {
    setEditedItem({...editedItem, brand: e.target.value});
  }

  const handleEditSubmit = e => {
    e.preventDefault();
    if(editedItem.description === '') {
      editedItem.description = item.description
    }
    if(editedItem.color === '') {
      editedItem.color = item.color
    }
    if(editedItem.brand === '') {
      editedItem.brand = item.brand
    }
    console.log(editedItem);
    dispatch({type: 'EDIT_ITEM', editedItem: {
        type: item.type,
        id: item.id,
        color: editedItem.color,
        brand: editedItem.brand,
        description: editedItem.description
    }
    });
    toggleEditForm();
  }

  return (
    <div>
      <div>
        <button onClick={() => toggleEditForm()}>EDIT</button>
      </div>
      <div className='editform'>
      { showEditForm ?
        (<form onSubmit={handleEditSubmit}>
          <label>Description:</label>
          <input type='text' placeholder={item.description} onChange={handleDescChange}/>
          <label>Color:</label>
          <input type='text' placeholder={item.color} onChange={handleColorChange}/>
          <label>Brand:</label>
          <input type='text' placeholder={item.brand} onChange={handleBrandChange}/>
          <button className="item-buttons" type='submit'>CONFIRM</button>
        </form>)
        : null}
        </div>
    </div>
  );
}

export default EditButton;