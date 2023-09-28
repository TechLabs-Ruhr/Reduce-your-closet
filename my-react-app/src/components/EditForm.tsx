import { useState} from 'react';
import '../CSS/MyCloset.css';


const EditForm = ({ item }: { item: any}) => { 
  
  const [showEditForm, setShowEditForm] = useState(false);
  const [editedItem, setEditedItem] = useState({
    color: '',
    brand: '',
    size: '',
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
  
 const EditItem = () => {   
const data = {notes: editedItem.description, color: editedItem.color, brand: editedItem.brand, 
  price: Number(editedItem.price), size: editedItem.size, category: item.category, id:item.id};
console.log (item.description)
    fetch(`http://localhost:8080/update_piece/${item.id}`, {
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
    },
    method: "PUT",	
    body: JSON.stringify(data) })
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
          <select name= 'editcolor' placeholder={item.color} onChange={handleColorChange}>
            <option value="">Please choose the color</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="grey">Grey</option>
            <option value="beige">Beige</option>
            <option value="brown">Brown</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
            <option value="mustard">Mustard</option>
            <option value="red">Red</option>
            <option value="pink">Pink</option>
            <option value="lightpink">Light Pink</option>
            <option value="violet">Violet</option>
            <option value="blue">Blue</option>
            <option value="lightblue">Light Blue</option>
            <option value="green">Green</option>
            <option value="bottlegreen">Bottle Green</option>
            <option value="lightgreen">Light Green</option>
            <option value="colorful"> Colorful</option>
            <option value="mint">Mint</option>
         </select>
         <br></br>
         <br></br>
          <label>Brand</label>
          <input type='text' placeholder={item.brand} onChange={handleBrandChange}/>
          <label>Size</label>
          <input type='text' placeholder={item.size} onChange={handleSizeChange}/>
          <label>Price in €</label>
          <input type='text' placeholder={item.price} onChange={handlePriceChange}/>
          {/* CONFIRM BUTTON */}
          <button className="confirmbutton" type='submit' onClick={() => EditItem ()} >CONFIRM</button>
      
        </form>)
        : null}
      </div>
    </div>
  );
};

export default EditForm;