import Shelf from '../components/Shelf'
import { useEffect, useState } from 'react'
import Navbar2 from "../components/Navbar(userloged)"
import '../CSS/MyCloset.css'
import { Link } from "react-router-dom"
import { Piece } from '../types'

const MyCloset = () => {

  /*const clothesDummy: Piece[] = [
      {
        type: 'top',
        color: 'red',
        brand: 'stradivarius',
        description: 'blouse',
        price: 20,
        id: 1
      },
      {
        type: 'top',
        color: 'green',
        brand: 'HM',
        description: 'tshirt',
        price: 20,
        id: 1
      },
      {
        type: 'bottom',
        color: '',
        brand: '',
        description: 'trausers',
        price: 20,
        id: 1
      },
      {
        type: 'shoes',
        color: '',
        brand: '',
        description: 'boots',
        price: 20,
        id: 1
      },
      {
        type: 'outwear',
        color: '',
        brand: '',
        description: 'jacket',
        price: 20,
        id: 1
      },
      {
        type: 'accesorie',
        color: '',
        brand: '',
        description: 'earings',
        price: 20,
        id: 1
      },
      {
        type: 'bag',
        color: '',
        brand: '',
        description: 'small bag',
        price: 20,
        id: 1
      }
    ]; */

    // use react use-effect hook to fetch all clothes from REST-API
    const [clothes, setClothes] = useState<Piece[]>([]);
    const [feedback, setFeedback] = useState('');
    
    useEffect(() => {
       fetch("http://localhost:8080/clth/all")
       .then(response => response.json())
       .then(data => {
         setClothes(data);
       })
       .catch((error) => {
         console.error('Error:', error);
      setFeedback("Something went wrong, please refresh the page");
      });

      //setClothes(clothesDummy);

    })


    //clothes categories filtered to display accordingly


  const top = clothes.filter(item => item.type === 'top');
  const bottom = clothes.filter(item => item.type === 'bottom');
  const shoes = clothes.filter(item => item.type === 'shoes');
  const outwear = clothes.filter(item => item.type === 'outwear');
  const accesorie = clothes.filter(item => item.type === 'accesorie');
  const bag = clothes.filter(item => item.type === 'bag');

  const [itemToShow, setItemToShow] = useState('top') 
  
  return ( 

    <div className='MyCloset'>
      <div className="navbar(userloged)"> 
        <Navbar2 />
      </div>

      <div className='MyClosetHeader'>
        <h2> My Closet 
          <Link to="/additem"><button id='additem'>ADD ITEM</button> </Link>
        </h2> 
      </div>
    
       {/* ITEMS ADDED BY USER DIPLAY HERE */}
        <div onClick={() => setItemToShow('top')}> <h3> TOPS </h3>
          {itemToShow === 'top' && <div> <Shelf itemList={clothes} /> </div>}
        </div>

        <div  onClick={() => setItemToShow('bottom')}> <h3> BOTTOMS</h3> 
          {itemToShow === 'bottom' && <div> <Shelf itemList={bottom} /> </div>}
        </div>
           
        <div  onClick={() => setItemToShow('shoes')}> <h3> SHOES </h3> 
          {itemToShow === 'shoes' && <div> <Shelf itemList={shoes} /> </div>}
        </div>
           
        <div  onClick={() => setItemToShow('outwear')}> <h3> OUTWEAR </h3> 
          {itemToShow === 'outwear' && <div> <Shelf itemList={outwear} /> </div>}
        </div>
              
        <div  onClick={() => setItemToShow('accesorie')}> <h3> ACCESORIES </h3> 
          {itemToShow === 'accesorie' && <div> <Shelf itemList={accesorie} /> </div>}
        </div>

        <div  onClick={() => setItemToShow('bag')}> <h3> BAGS </h3> 
        {itemToShow === 'bag' && <div> <Shelf itemList={bag} /> </div>}
        <span id="feedback">{feedback}</span>
        </div>
    </div>

  );
};

export default MyCloset;