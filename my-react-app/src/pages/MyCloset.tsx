import Shelf from '../components/Shelf'
import { ClothesContext } from '../contexts/ClothesContext'
import { useState, useContext } from 'react'

const MyCloset = () => {
  const { clothes } = useContext(ClothesContext);
  const tops = clothes.filter(item => item.type === 'tops');
  const bottoms = clothes.filter(item => item.type === 'bottoms');
  const shoes = clothes.filter(item => item.type === 'shoes');
  const outwear = clothes.filter(item => item.type === 'outwear');
  const accesories = clothes.filter(item => item.type === 'accesories');
  const bags = clothes.filter(item => item.type === 'bag');

  const [itemToShow, setItemToShow] = useState('tops');

  return (
    
    <div >
      <h2>My Closet</h2>
      <div >
        <div>

          <div  onClick={() => setItemToShow('tops')}> </div> <h1> TOPS </h1> </div>
          {itemToShow === 'tops' && <div> <Shelf itemList={tops} /> </div>}

          <div  onClick={() => setItemToShow('bottoms')}> <h1> BOTTOMS </h1> </div>
          {itemToShow === 'bottoms' && <div> <Shelf itemList={bottoms} /> </div>}
        
          <div  onClick={() => setItemToShow('shoes')}> <h1> SHOES </h1> </div>
          {itemToShow === 'shoes' && <div>  <Shelf itemList={shoes} /> </div>}

          <div onClick={() => setItemToShow('outwear')}> </div> <h1> OUTWEAR </h1> </div>
          {itemToShow === 'outwear' && <div> <Shelf itemList={outwear} /> </div>}

          <div  onClick={() => setItemToShow('accesories')}> <h1> ACCESORIES </h1> </div>
          {itemToShow === 'accesories' && <div> <Shelf itemList={accesories} /> </div>}

          <div  onClick={() => setItemToShow('bag')}> <h1> BAGS </h1> </div>
          {itemToShow === 'bag' && <div> <Shelf itemList={bags} /> </div>}
        </div>

  );
}

export default MyCloset;