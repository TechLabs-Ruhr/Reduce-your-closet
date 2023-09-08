import Shelf from '../components/Shelf'
import { useState } from 'react'
import { v4 as uuidv4} from 'uuid'
import Navbar from "../components/Navbar(userloged)"
import '../CSS/MyCloset.css'
import { Link } from "react-router-dom"

const MyCloset = () => {

  const clothes = [
      {
        type: 'top',
        color: 'red',
        brand: 'stradivarius',
        description: 'blouse',
        id: uuidv4()
      },
      {
        type: 'top',
        color: 'green',
        brand: 'HM',
        description: 'tshirt',
        id: uuidv4()
      },
      {
        type: 'bottom',
        color: '',
        brand: '',
        description: 'trausers',
        id: uuidv4()
      },
      {
        type: 'shoes',
        color: '',
        brand: '',
        description: 'boots',
        id: uuidv4()
      },
      {
        type: 'outwear',
        color: '',
        brand: '',
        description: 'jacket',
        id: uuidv4()
      },
      {
        type: 'accesorie',
        color: '',
        brand: '',
        description: 'earings',
        id: uuidv4()
      },
      {
        type: 'bag',
        color: '',
        brand: '',
        description: 'small bag',
        id: uuidv4()
      }
    ];


  const top = clothes.filter(item => item.type === 'top');
  const bottom = clothes.filter(item => item.type === 'bottom');
  const shoes = clothes.filter(item => item.type === 'shoes');
  const outwear = clothes.filter(item => item.type === 'outwear');
  const accesorie = clothes.filter(item => item.type === 'accesorie');
  const bag = clothes.filter(item => item.type === 'bag');

  const [itemToShow, setItemToShow] = useState('tops') 
  
  return ( 

    <div className='MyCloset'>
      <div className="navbar(userloged)"> 
        <Navbar />
      </div>

      <div className='MyClosetHeader'>
        <h2> My Closet 
          <Link to="/additem"><button id='additem'>ADD ITEM</button> </Link>
        </h2> 
      </div>

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