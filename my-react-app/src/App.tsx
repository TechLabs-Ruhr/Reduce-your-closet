import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Component } from "react"


import MainPage from './MainPage'
import Signin from './components/Signin'
import FAQ from './pages/FAQ'
import Footer from './components/Footer'
import CreateYourCloset from './pages/CreateYourCloset'


class App extends Component {
  render() {
    return (
    <BrowserRouter>
    <Routes>
        <Route path='/' Component={MainPage}/>
        <Route path='/signin' Component={Signin}/>
        <Route path='/faq' Component={FAQ}/>
        <Route path= '/createyourcloset' Component={CreateYourCloset} />
        </Routes>
        <div> <Footer /> </div>
    
    </BrowserRouter>
    

    );
  }
}
export default App;