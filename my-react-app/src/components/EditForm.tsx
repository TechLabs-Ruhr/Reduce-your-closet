import { useState } from 'react';

const EditForm = ({ item }) => { 
  
  const [showEditForm, setShowEditForm] = useState(false);
  const [editedItem, setEditedItem] = useState({
    color: '',
    brand: '',
    description: '',
    price: ''
  });

  

  const toggleEditForm = () => {
    showEditForm ?
      setShowEditForm(false) : setShowEditForm(true)
  }
  const handleDescChange = (e:any) => {
    setEditedItem({...editedItem, description: e.target.value});
  }
  const handleColorChange = (e:any) => {
    setEditedItem({...editedItem, color: e.target.value});
  }
  const handleBrandChange = (e:any) => {
    setEditedItem({...editedItem, brand: e.target.value});
  }
  const handlePriceChange = (e:any) => {
    setEditedItem({...editedItem, price: e.target.value});
  }

  const handleEditSubmit = (e:any) => {
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
    if(editedItem.price === '') {
      editedItem.price = item.price
    }
    console.log(editedItem);
   ({type: 'EDIT_ITEM', editedItem: {
        type: item.type,
        id: item.id,
        color: editedItem.color,
        brand: editedItem.brand,
        description: editedItem.description,
        price: editedItem.price
    }
    });
    toggleEditForm();
  }

  return (
    <div>
      <div>
        <button className='ClosetButtons' onClick={() => toggleEditForm()}>EDIT ITEM</button>
      </div>
      <div id='editform'>
      { showEditForm ?
        (<form onSubmit={handleEditSubmit}>
          <label>Description</label>
          <input type='text' placeholder={item.description} onChange={handleDescChange}/>
          <label>Color</label>
          <input type='text' placeholder={item.color} onChange={handleColorChange}/>
          <label>Brand</label>
          <input type='text' placeholder={item.brand} onChange={handleBrandChange}/>
          <label>Price in €</label>
          <input type='text' placeholder={item.price} onChange={handlePriceChange}/>
          <button className="confirmbutton" type='submit'>CONFIRM</button>
        </form>)
        : null}
      </div>
    </div>
  );
};

export default EditForm;