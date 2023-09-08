import { useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
import UploadImage from '../components/UploadImage'

const ItemForm = ({ typeOfItem }) => {
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [brand, setBrand] = useState('');
  const [setFeedback] = useState(null);


  const handleDescChange = e => {
    setDescription(e.target.value);
  }
  const handleColorChange = e => {
    setColor(e.target.value);
  }
  const handleBrandChange = e => {
    setBrand(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();

    if(description === '' || color === '' || brand === ''){
      setFeedback
      setTimeout(() => {
        setFeedback(null);
      }, 3000)
    } else {
      const newItem = {
        type: typeOfItem,
        description,
        color,
        brand,
        id: uuidv4()
      }
    }
  }

  return (
    <div className='itemFormContainer'>
       <div id='uploadImage'>
        <UploadImage/>
       </div>
      <form onSubmit={handleSubmit}>
        <br></br>
        <div id='itemForm'>
          <label>What kind of {typeOfItem} is it?</label>
          <br />
          <input name="desc" type="text" placeholder={`Description...`} onChange={handleDescChange} required />
        
          <label>Color of the {typeOfItem}</label>
          <br />
          <input name="color" type="text" placeholder="Color..." onChange={handleColorChange} required />
       
          <label>Brand</label>
          <br />
          <input name="color" type="text" placeholder="Brand..." onChange={handleBrandChange} required />
          <button id="create" type="submit"> CREATE </button>
          <button id="cancel"> CANCEL </button>
         </div>
      </form>
    </div>
  );
};

export default ItemForm;