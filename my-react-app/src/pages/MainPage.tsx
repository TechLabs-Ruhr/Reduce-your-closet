//in progress

import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


//Components
import Banner from './components/Banner'
import HowItWorks from './components/How it works'
import Register from './components/Register'
import Footer from './components/Footer'

const MainPage = () => {
    return (
    <Routes>
       <Route path='/' element={Banner}></Route>
       <Route path='/howitworks' element={HowItWorks}></Route>
       <Route path='/register' element={Register}></Route>
       <Route path='/footer' element={Footer}></Route>
     </Routes>
      
      );
    }
    
    export default MainPage;