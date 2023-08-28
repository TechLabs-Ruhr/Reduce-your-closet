import { createContext, useReducer, useEffect } from 'react'
import { clothesReducer } from '../reducers/clothesReducer'
import { v4 as uuidv4} from 'uuid'

export const ClothesContext = createContext();

const ClothesContextProvider = (props) => {



    const [clothes, dispatch] = useReducer(clothesReducer, [], () => {
      const localData = localStorage.getItem('clothes');
      return localData ? JSON.parse(localData) : [
        {
          type: 'tops',
          color: '',
          brand: '',
          description: 'blouse',
          id: uuidv4()
        },
        {
          type: 'bottoms',
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
          type: 'accesories',
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
        },
      
      ];
  });

  useEffect( () => {
    localStorage.setItem('clothes', JSON.stringify(clothes))
  }, [clothes]);

  return (
    <ClothesContext.Provider value={ {clothes, dispatch} }>
      { props.children }
    </ClothesContext.Provider>
  );
}

export default ClothesContextProvider
