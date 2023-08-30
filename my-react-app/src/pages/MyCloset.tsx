import Shelf from '../components/Shelf'
import { useState } from 'react'
import { v4 as uuidv4} from 'uuid'
import Navbar from "../components/Navbar(userloged)"
import '../CSS/MyCloset.css'

const MyCloset = () => {

  const clothes = [
      {
        type: 'top',
        color: '',
        brand: '',
        description: 'blouse',
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
          <h2 className='title2'>My Closet</h2> 
          <button>ADD ITEM</button>
        <div  onClick={() => setItemToShow('top')}> <h3> TOPS </h3> </div>
          {itemToShow === 'top' && <fieldset> <Shelf itemList={top} /> </fieldset>}

          <div  onClick={() => setItemToShow('bottom')}> <h3> BOTTOMS </h3> </div>
          {itemToShow === 'bottom' && <fieldset> <Shelf itemList={bottom} /> </fieldset>}

          <div  onClick={() => setItemToShow('shoes')}> <h3> SHOES </h3> </div>
          {itemToShow === 'shoes' && <fieldset> <Shelf itemList={shoes} /> </fieldset>}

          <div  onClick={() => setItemToShow('outwear')}> <h3> OUTWEAR </h3> </div> 
          {itemToShow === 'outwear' && <fieldset> <Shelf itemList={outwear} /> </fieldset>}

          <div  onClick={() => setItemToShow('accesorie')}> <h3> ACCESORIES </h3> </div>
          {itemToShow === 'accesorie' && <fieldset> <Shelf itemList={accesorie} /> </fieldset>}

          <div  onClick={() => setItemToShow('bag')}> <h3> BAGS </h3> </div>
          {itemToShow === 'bag' && <fieldset> <Shelf itemList={bag} /> </fieldset>}
          </div>
   

  );
}

export default MyCloset;