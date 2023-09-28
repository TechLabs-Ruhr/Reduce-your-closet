import Shelf from '../components/Shelf'
import { useEffect, useState } from 'react'
import Navbar2 from "../components/Navbar(userloged)"
import '../CSS/MyCloset.css'
import { Link } from "react-router-dom"
import { Piece } from '../types'

const MyCloset = () => {

    //clothes categories filtered to display accordingly

    const [clothes, setClothes] = useState<Piece[]>([]);
    const [top, setTop] = useState<Piece[]>([]);
    const [bottom, setBottom] = useState<Piece[]>([]);
    const [shoes, setShoes] = useState<Piece[]>([]);
    const [outwear, setOutwear] = useState<Piece[]>([]);
    const [accesorie, setAccesorie] = useState<Piece[]>([]);
    const [bag, setBag] = useState<Piece[]>([]);
    const [feedback, setFeedback] = useState('');

    const UpdateCloths = () => {   console.log('hello')
    fetch("http://localhost:8080/clth/all")
    .then(response => response.json())
    .then(data => {
      setClothes(data);
    })
    .catch((error) => {
      console.error('Error:', error);
   setFeedback("Something went wrong, please refresh the page");
   });}

    const getCategory = (category:string)=> { 
      const requestCategory = {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
        }
    };

    

      fetch("http://localhost:8080/clth/all", requestCategory)
      .then(response => response.json())
      .then(data => {
        setClothes(data);
      })
      .catch((error) => {
        console.error('Error:', error);
     setFeedback("Something went wrong, please refresh the page");
     });
    setItemToShow (category)
     console.log (top)
    }

    useEffect (() => { 
      setTop(clothes.filter(item => item['category'] === 'top')); 
      setBottom(clothes.filter(item => item['category'] === 'bottom')), clothes;
      setShoes(clothes.filter(item => item['category'] === 'shoes')), clothes;
      setOutwear(clothes.filter(item => item['category'] === 'outwear')), clothes;
      setAccesorie(clothes.filter(item => item['category'] === 'accesorie')), clothes; 
      setBag(clothes.filter(item => item['category'] === 'bag')), clothes;
      console.log (top)

    },[clothes])

    const [itemToShow, setItemToShow] = useState('');
  
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
      <span id="feedback">{feedback}</span>
       {/* ITEMS ADDED BY USER DIPLAY HERE */}
        <div onClick={() => getCategory("top")}> <h3> TOPS </h3>
          {itemToShow === 'top' && <div> <Shelf itemList={top} UpdateClothes={UpdateCloths} /> </div>}
        </div>

        <div  onClick={() => getCategory("bottom")}> <h3> BOTTOMS</h3> 
          {itemToShow === 'bottom' && <div> <Shelf itemList={bottom} UpdateClothes={UpdateCloths}/> </div>}
        </div>
           
        <div  onClick={() => getCategory("shoes")}> <h3> SHOES </h3> 
          {itemToShow === 'shoes' && <div> <Shelf itemList={shoes} UpdateClothes={UpdateCloths}/> </div>}
        </div>
           
        <div onClick={() => getCategory("outwear")}> <h3> OUTWEAR </h3> 
          {itemToShow === 'outwear' && <div> <Shelf itemList={outwear} UpdateClothes={UpdateCloths} /> </div>}
        </div>
              
        <div  onClick={() => getCategory("accesorie")}> <h3> ACCESORIES </h3> 
          {itemToShow === 'accesorie' && <div> <Shelf itemList={accesorie} UpdateClothes={UpdateCloths} /> </div>}
        </div>

        <div onClick={() => getCategory("bag")}> <h3> BAGS </h3> 
        {itemToShow === 'bag' && <div> <Shelf itemList={bag} UpdateClothes={UpdateCloths} /> </div>}
        </div>
    </div>

  );
};

export default MyCloset;