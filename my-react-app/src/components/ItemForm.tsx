import { useState} from 'react'
import UploadImage from '../components/UploadImage'


const ItemForm = ({typeOfItem}) => {
  
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [brand, setBrand] = useState('');
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
  const handleSubmit = (e:any) => {
    e.preventDefault();

    if(description === '' || color === '' || brand === ''){
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
          <input name="color" type="text" placeholder="Brand..." onChange={handleBrandChange} required />
          <button id="create" type="submit"> CREATE </button>
          <button id="cancel"> CANCEL </button>
         </div>
      </form>
    </div>
  );
};

export default ItemForm;