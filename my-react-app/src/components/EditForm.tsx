import { useState, useEffect } from 'react';

const EditForm = ({ item }: { item: any}) => { 
  
  const [showEditForm, setShowEditForm] = useState(false);
  const [editedItem, setEditedItem] = useState({
    color: '',
    brand: '',
    size: '',
    description: '',
    price: ''
  });

  const [feedback, setFeedback] = useState('');
  

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
  const handleSizeChange = (e:any) => {
    setEditedItem({...editedItem, size: e.target.value});
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
    if(editedItem.size === '') {
      editedItem.size = item.size
    }
    if(editedItem.price === '') {
      editedItem.price = item.price
    }

//Edit form, 
//User should be able to EDIT existing items description, color, brand, size and price on Click 'confirm' button, items id stays unchanged

    console.log(editedItem);
   ({type: 'EDIT_ITEM', editedItem: {
        type: item.type,
        id: item.id,
        color: editedItem.color,
        brand: editedItem.brand,
        size: editedItem.size,
        description: editedItem.description,
        price: editedItem.price
    }
    });
    toggleEditForm();
  }

  useEffect(() => {
    fetch("http://localhost:8080/clth/all")
    .then(response => response.json())
    .then(data => {
      setEditedItem (data);
    })
    .catch((error) => {
      console.error('Error:', error);
   setFeedback("Something went wrong, please try to edit this item again");
   });
})

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
          <label>Size</label>
          <input type='text' placeholder={item.size} onChange={handleSizeChange}/>
          <label>Price in €</label>
          <input type='text' placeholder={item.price} onChange={handlePriceChange}/>
          {/* CONFIRM BUTTON */}
          <button className="confirmbutton" type='submit'>CONFIRM</button>
          <span id="feedback">{feedback}</span>
        </form>)
        : null}
      </div>
    </div>
  );
};

export default EditForm;