import DeleteButton from "./DeleteButton"
import EditForm from './EditForm'
import WearingCounter from "./WearingCounter"
import '../CSS/MyCloset.css'

const Shelf = ({itemList, canBeDeleted = true, canBeEdited = true, canBeCounted = true}) => {
  return (
    
    <div id='itemslist'>
      {itemList.map( item => (
        
        <div id='items container'>
        <fieldset key={item.id}>
            <p> {item.description} </p>
            <p> {item.color} </p>
            <p> {item.brand} </p>
        </fieldset>
        
   
            <div id= 'itemsbuttons'>
            { canBeEdited && <EditForm item={item} />}
          
            { canBeDeleted && <DeleteButton id={item.id} />}
           
            { canBeCounted && <WearingCounter id={item.id} />}
            </div>
         </div>
           
      ))}
    </div>
  );
}

export default Shelf;
