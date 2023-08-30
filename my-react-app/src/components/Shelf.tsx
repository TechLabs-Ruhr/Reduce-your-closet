import DeleteButton from "./DeleteButton"
import EditForm from './EditForm'

const Shelf = ({itemList, canBeDeleted = true, canBeEdited = true}) => {
  return (
    <div id='itemslist'>
      {itemList.map( item => (
        <fieldset id='item' key={item.id}>
          <div >
            <p>{item.description}</p>
            <p ><span>{item.color}</span><span>{item.brand}</span></p>
          </div>
          <div >
            <div>
            { canBeEdited && <EditForm item={item} />}
            </div>
            <div>
            { canBeDeleted && <DeleteButton id={item.id} />}
            </div>
          </div>
        </fieldset>
      ))}
    </div>
  );
}

export default Shelf;