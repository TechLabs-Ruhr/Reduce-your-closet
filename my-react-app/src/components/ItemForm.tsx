import { useState} from 'react'
//import UploadImage from '../components/UploadImage'

// Add Your Item Form 

const ItemForm = ({typeOfItem}) => {
  
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [brand, setBrand] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState(0.0);
  const [feedback, setFeedback] = useState('');


  const handleDescChange = (e:any) => {
    setDescription(e.target.value);
  }
  const handleColorChange = (e:any) => {
    setColor(e.target.value);
  }
  const handleBrandChange = (e:any) => {
    setBrand(e.target.value);
  }
  const handleSizeChange = (e:any) => {
    setSize(e.target.value);
  }
  const handlePriceChange = (e:any) => {
    setPrice(e.target.value);
  }
  const handleSubmit = (e:any) => {
    e.preventDefault();

    if(description === '' || color === '' || brand === '' || size === '' || price === 0.0){
      setFeedback("Please fill in all fields");
    } else {
      
      // HTTP POST to Backend to create a new item
      const data = {notes: description, color, brand, price, size, category: typeOfItem};
      fetch("http://localhost:8080/additem/create", {
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data), 
      })
      // check for status code and terminate if not 201
      .then(response => {
          if(response.status !== 200){
              throw new Error("HTTP status code not 201");
          } else {
            return response.json();
          }
      })
      .then(data => {
          setFeedback("Item successfully added");
      })
      .catch((error) => {
          console.error('Error:', error);
          setFeedback("Something went wrong, please try again");
      });
    }
  }

//User should be able to ADD NEW ITEM to database, adding its description, color, brand, size and price 
// on Click 'create' button, items should be saved
// on Click 'cancel' button, changes made by user should be canceled
//item should get own ID and be displayed in 'MY CLOSET' page. 
//HTTP POST Request Method


  return (
    <div className='itemFormContainer'>
       {/*<div id='uploadImage'>
        Page contains also UPLOAD IMAGE form, for this element check UploadImage.tsx file from folder 'components'
        <UploadImage/>
       </div> */}
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
         
          <label>Size</label>
          <br />

          <input name="size" type="text" placeholder="Size..." onChange={handleSizeChange} required />

          <label>Price in € </label>
          <br />

          <input name="price" type="number" placeholder="Price..." onChange={handlePriceChange} required />
          <br></br>
          <span id="feedback">{feedback}</span>
          <br></br>
            {/* CREATE BUTTON */}
          <button id="create" type="submit"> CREATE </button>
            {/* CANCEL BUTTON */}
          <button id="cancel"> CANCEL </button>
         </div>
      </form>
    </div>
  );
};

export default ItemForm;