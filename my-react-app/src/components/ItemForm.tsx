import { useState} from 'react'
import UploadImage from '../components/UploadImage'


const ItemForm = ({typeOfItem}) => {
  
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [setFeedback] = useState(null);


  const handleDescChange = (e:any) => {
    setDescription(e.target.value);
  }
  const handleColorChange = (e:any) => {
    setColor(e.target.value);
  }
  const handleBrandChange = (e:any) => {
    setBrand(e.target.value);
  }
  const handlePriceChange = (e:any) => {
    setBrand(e.target.value);
  }
  const handleSubmit = (e:any) => {
    e.preventDefault();

    if(description === '' || color === '' || brand === '' || price === ''){
      setFeedback
      setTimeout(() => {
        setFeedback;
      }, 3000)
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

          <input name="brand" type="text" placeholder="Brand..." onChange={handleBrandChange} required />

          <label>Price in € </label>
          <br />

          <input name="price" type="text" placeholder="Price..." onChange={handlePriceChange} required />
          
          <button id="create" type="submit"> CREATE </button>
          <button id="cancel"> CANCEL </button>
         </div>
      </form>
    </div>
  );
};

export default ItemForm;