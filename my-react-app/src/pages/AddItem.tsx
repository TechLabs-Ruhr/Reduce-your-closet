import { useState } from 'react'
import ItemForm from '../components/ItemForm'
import Navbar from "../components/Navbar(userloged)"
import UploadImage from '../components/UploadImage'

const AddItem = () => {
  const [typeOfItem, setTypeOfItem] = useState('');

  const handleTypeChange = e => {
    setTypeOfItem(e.target.value);
  }

  return (
    <div className='addItem'>
          <div className="navbar(userloged)"> 
           <Navbar />
          </div>
          <h2>Add a new item to your SMARTROBE </h2>
          <div id='uploadImage'>
         <UploadImage/>
         </div>
      <select className='select' onChange={handleTypeChange}>
        <option value="">Please choose category</option>
        <option value="top">TOPS</option>
        <option value="bottom">BOTTOMS</option>
        <option value="shoes">SHOES</option>
        <option value="outwear">OUTWEAR</option>
        <option value="accesorie">ACCESORIES</option>
        <option value="bag">BAGS</option>

      </select>
      {(typeOfItem === 'top' && <ItemForm typeOfItem={typeOfItem} />)}
      {(typeOfItem === 'bottom' && <ItemForm typeOfItem={typeOfItem} />)}
      {(typeOfItem === 'shoes' && <ItemForm typeOfItem={typeOfItem} />)}
      {(typeOfItem === 'outwear' && <ItemForm typeOfItem={typeOfItem} />)}
      {(typeOfItem === 'accesorie' && <ItemForm typeOfItem={typeOfItem} />)}
      {(typeOfItem === 'bag' && <ItemForm typeOfItem={typeOfItem} />)}
    </div>
  );
}

export default AddItem;