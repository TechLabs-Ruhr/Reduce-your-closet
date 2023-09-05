import DeleteButton from "./DeleteButton"
import EditForm from './EditForm'
import WearingCounter from "./WearingCounter";

const Shelf = ({itemList, canBeDeleted = true, canBeEdited = true, canBeCounted = true}) => {
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
            <div>
            { canBeCounted && <WearingCounter id={item.id} />}
            </div>
            </div>
          </div>
        </fieldset>
      ))}
    </div>
  );
}

export default Shelf;
