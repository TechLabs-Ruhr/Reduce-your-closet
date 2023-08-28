import DeleteButton from "./DeleteButton"
import EditButton from './EditButton'

const Shelf = ({itemList, canBeDeleted = true, canBeEdited = true}) => {
  return (
    <div>
      {itemList.map( item => (
        <div key={item.id}>
          <div >
            <p>{item.description}</p>
            <p ><span>{item.color}</span><span>{item.brand}</span></p>
          </div>
          <div >
            <div>
            { canBeEdited && <EditButton item={item} />}
            </div>
            <div>
            { canBeDeleted && <DeleteButton id={item.id} />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shelf;