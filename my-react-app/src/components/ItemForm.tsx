import { useState} from 'react'
//import UploadImage from '../components/UploadImage'

// Add Your Item Form 

const ItemForm = ({typeOfItem}: { typeOfItem: string }) => {
  
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
      .then((data) => {
        console.log('data:', data);
        setFeedback("Item successfully added");
      })
      .catch((error) => {
          console.error('Error:', error);
          setFeedback("Something went wrong, please try again");
      });
    }
  }

  return (
    <div className='itemFormContainer'>
       {/*<div id='uploadImage'>
        Page contains also UPLOAD IMAGE form, for this element check UploadImage.tsx file from folder 'components'
        <UploadImage/>
       </div> */}
      <form onSubmit={handleSubmit}>
        <div id='itemForm'>
          <label>What kind of {typeOfItem} is it?</label>
          <input name="desc" type="text" placeholder={`Description...`} onChange={handleDescChange} required />
         
          <label>Color </label>
          <br />
          <select name='selectColor' onChange={handleColorChange} required>
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
           <br/>
           <br/>
       
          <label>Brand</label>
          <br/>
          <input name="brand" type="text" placeholder="Brand..." onChange={handleBrandChange} required />
         
          <label>Size</label>
          <br/>
          <input name="size" type="text" placeholder="Size..." onChange={handleSizeChange} required />

          <label>Price in € </label>
          <br/>
          <input name="price" type="number" placeholder="Price..." onChange={handlePriceChange} required />
          
          <br></br>
          <span id="feedback">{feedback}</span>
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