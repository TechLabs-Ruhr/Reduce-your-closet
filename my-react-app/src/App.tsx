import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'



//Components

import Header from './components/Header'
import Nav from './components/Nav'
import Logo from './components/Logo'
import HomePictures from './components/HomePictures'
//import LogWindow from './components/LogWindow'
// import MySmartrobeLoginButton from './components/MySmartrobeLoginButton'

//Pages

import About from './pages/About'
import MyCloset from './pages/MyCloset'
import MyStatistics from './pages/MyStatistics'
import SthElse from './pages/SthElse'
import NotFound from './pages/NotFound'



function App() {
  return (
    <BrowserRouter>
    <div>
      <Logo />
    </div>

    <div>
      <Header />
    </div>
    <div>
      <Nav />
    </div>
    <div>
      <HomePictures />
    </div>
  
      <Routes>
      <Route path='/' Component={About}/>
      <Route path='/mycloset' Component={MyCloset}/>
      <Route path='/mystatistics' Component={MyStatistics}/>
      <Route path='/somethingelse' Component={SthElse}/>
      <Route Component={NotFound}/>
      </Routes>
     
    </BrowserRouter>
  )
}

export default App;