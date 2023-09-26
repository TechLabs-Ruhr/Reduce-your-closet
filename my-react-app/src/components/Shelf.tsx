import DeleteButton from "./DeleteButton"
import EditForm from './EditForm'
import WearingCounter from "./WearingCounter"
import '../CSS/MyCloset.css'
import { Piece } from '../types'

const Shelf = ({itemList, canBeDeleted = true, canBeEdited = true, canBeCounted = true, UpdateClothes}: {
  itemList: Piece[],
  canBeDeleted?: boolean,
  canBeEdited?: boolean,
  canBeCounted?: boolean,
  UpdateClothes:()=>void
}) => {

  return (
    
    <div id='itemslist'>
      {itemList.map( item => (
        
        <div id='items-container'>
            {/* ITEMS DATA */}
            {/* Would we perfect, if instead of just grey fieldset we could display a picture uploaded by user */}
        <fieldset key={item.id}>
            <p> Description: {item.notes} </p>
            <p> Color: {item.color} </p>
            <p> Brand: {item.brand} </p>
            <p> Size: {item.size} </p>
            <p> Price: {item.price} €</p>
        </fieldset>
   
            <div id= 'itemsbuttons'>
            { canBeEdited && <EditForm item={item} />}
          
            { canBeDeleted && <DeleteButton cloth_id={item.id} UpdateClothes={UpdateClothes}/>}
           
            { canBeCounted && <WearingCounter cloth_id={item.id}/>}
            </div>
         </div>
      ))}
    </div>
  )
}

export default Shelf;
