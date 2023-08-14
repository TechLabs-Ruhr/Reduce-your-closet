import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'



//Components
import Nav from './components/Nav'
import Banner from './components/Banner'
//import LogWindow from './components/LogWindow'
// import MySmartrobeLoginButton from './components/MySmartrobeLoginButton'

//Pages
import Home from './pages/Home'
import HowItWorks from './pages/How it works';
import FAQ from './pages/FAQ'
import SignIn from './pages/Sign In'
import NotFound from './pages/NotFound'



function App() {
  return (
    <BrowserRouter>

    <div>
     <Nav />
   </div> 
    <div>
     <Banner />
    </div>

      <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/howitworks' Component={HowItWorks}/>
      <Route path='/faq' Component={FAQ}/>
      <Route path='/signin' Component={SignIn}/>
      <Route Component={NotFound}/>
      </Routes>
     
    </BrowserRouter>
  )
}

export default App;