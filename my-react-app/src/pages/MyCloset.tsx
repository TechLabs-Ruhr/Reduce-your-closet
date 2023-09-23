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

    useEffect(()=> { 
      setTop(clothes.filter(item => item.type === 'top')); 
      setBottom(clothes.filter(item => item.type === 'bottom')), clothes;
      setShoes(clothes.filter(item => item.type === 'shoes')), clothes;
      setOutwear(clothes.filter(item => item.type === 'outwear')), clothes;
      setAccesorie(clothes.filter(item => item.type === 'accesorie')), clothes; 
      setBag(clothes.filter(item => item.type === 'bag')), clothes;
}, [])

    
    useEffect(() => {
       fetch("http://localhost:8080/clth/all")
       .then(response => response.json())
       .then(data => {
         setClothes(data);
         setTop(data);
         setBottom(data);
         setShoes(data);
         setOutwear(data);
         setAccesorie(data);
         setBag(data);
       })
       .catch((error) => {
         console.error('Error:', error);
      setFeedback("Something went wrong, please refresh the page");
      });

    })

    

    const [itemToShow, setItemToShow] = useState('top');
  
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
        <div onClick={() => setItemToShow('top')}> <h3> TOPS </h3>
          {itemToShow === 'top' && <div> <Shelf itemList={top} /> </div>}
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
        </div>
    </div>

  );
};

export default MyCloset;