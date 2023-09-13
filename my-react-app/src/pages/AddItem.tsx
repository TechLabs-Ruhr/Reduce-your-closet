import { useState } from 'react'
import ItemForm from '../components/ItemForm'
import Navbar2 from "../components/Navbar(userloged)"
import '../CSS/AddItem.css'


const AddItem = () => {
  document.documentElement.scrollTop = 0;
  
  const [typeOfItem, setTypeOfItem] = useState('');

  const handleTypeChange = (e:any) => {
    setTypeOfItem(e.target.value);
  }

  // think there is no http request required

  return (
    <div className='AddItem'>
        <Navbar2 />
        <h2 id ='AddItemTitle'>Add a new item to your SMARTROBE </h2>

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