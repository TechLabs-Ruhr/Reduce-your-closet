import DeleteButton from "./DeleteButton"
import EditForm from './EditForm'
import WearingCounter from "./WearingCounter"
import '../CSS/MyCloset.css'
import { Piece } from '../types'
import { json } from "react-router-dom"

const Shelf = ({itemList, canBeDeleted = true, canBeEdited = true, canBeCounted = true, UpdateClothes}: 
  { 
  itemList: Piece[],
  canBeDeleted?: boolean,
  canBeEdited?: boolean,
  canBeCounted?: boolean,
  UpdateClothes:()=>void
  }) => {

  const GetCPU = (cloth_id:number) => 
  
  { const requestCPU = {
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json',
    }
};
  fetch (`http://localhost:8080/clth/${cloth_id}/getcpu`, requestCPU)
  .then(response => response.json())
      .then(data => {
    UpdateClothes ()
      })
      console.log ('hello')
}

  return (
    
    <div id='itemslist'>
      {itemList.sort( (a,b)=>b.timesWorn - a.timesWorn).map((item,index) => (
        
        <div id='items-container'>
            {/* ITEMS DATA */}
            {/* Would we perfect, if instead of just grey fieldset we could display a picture uploaded by user */}
        <fieldset key={item.id}>
            <p> Description: {item.notes} </p>
            <p> Color: {item.color} </p>
            <p> Brand: {item.brand} </p>
            <p> Size: {item.size} </p>
            <p> Price: {item.price} €</p>
            <p> Cost Per Use: {item.cost_per_use !== null ? item.cost_per_use.toFixed(2) + ' €' : 'N/A'} </p>
            <p> Times Worn: {item.timesWorn !== null ? item.timesWorn + ' ' : '0'} </p>
        </fieldset>
   
            <div id= 'itemsbuttons'>
            { canBeEdited && <EditForm item={item} />}
          
            { canBeDeleted && <DeleteButton cloth_id={item.id} UpdateClothes={UpdateClothes}/>}
           
            { canBeCounted && <WearingCounter cloth_id={item.id} GetCPU={GetCPU}/>}
            </div>
         </div>
      ))}
    </div>
  )
}

export default Shelf;
