import { useState } from 'react'
import ItemForm from '../components/ItemForm'

const AddItem = () => {
  const [typeOfItem, setTypeOfItem] = useState('');

  const handleTypeChange = e => {
    setTypeOfItem(e.target.value);
  }

  return (
    <div className='addItem'>
      <h2>Add a new item to your wardrobe</h2>
      <select className='select' onChange={handleTypeChange}>
        <option value="">Type of item</option>
        <option value="top">TOPS</option>
        <option value="bottom">BOTTOMS</option>
        <option value="shoes">SHOES</option>
        <option value="outwear">OUTWEAR</option>
        <option value="accesorie">ACCESORIES</option>
        <option value="bag">BAGS</option>

      </select>
      {(typeOfItem === '' && <div className='feedback'><p>You must choose a type...</p></div>)}
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