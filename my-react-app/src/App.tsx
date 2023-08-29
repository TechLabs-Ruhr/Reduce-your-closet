import './CSS/App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Component } from "react"



import MainPage from './pages/MainPage'
import Signin from './components/Signin'
import FAQ from './pages/FAQ'
import Footer from './components/Footer'
import CreateYourCloset from './pages/MyClosetEmpty'
import MyProfile from './pages/MyProfile'
import MyStatistics from './pages/MyStatistics';
import MyCloset from './pages/MyCloset';
import Contact from './pages/Contact';
import AddItem from './pages/AddItem';
import NotFound from './components/NotFound';


class App extends Component {
  render() {
    return (
    <BrowserRouter>
    
    <Routes>
        <Route path='/' Component={MainPage}/>
        <Route path='/signin' Component={Signin}/>
        <Route path= '/createyourcloset' Component={CreateYourCloset} />
        <Route path='/createyourcloset/myprofile' Component={MyProfile} />
        <Route path= '/createyourcloset/mycloset' Component={MyCloset} />
        <Route path= '/createyourcloset/mystatistics' Component={MyStatistics} />
        <Route path= '/contact' Component={Contact} />
        <Route path= '/additem' Component={AddItem} />
        <Route path= '/faq' Component={FAQ} />
        <Route path= '*' Component={NotFound}/>
        
        </Routes>
      
        <div> <Footer /> </div>
        
    
    </BrowserRouter>
    

    );
  }
}
export default App;