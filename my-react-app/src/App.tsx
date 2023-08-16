import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

//Components
import Nav from './components/Nav'
import Banner from './components/Banner'
import HowItWorks from './components/How it works'
import Register from './components/Register'
import Footer from './components/Footer'

//Pages
import FAQ from './pages/FAQ'
import NotFound from './pages/NotFound'
//import Login from './pages/Login'


function App() {
  return (
    <BrowserRouter>

    <div>
     <Nav />
   </div> 
    <div>
     <Banner />
     </div>
     <div>
     <HowItWorks />
    </div>
    <div>
     <Register />
    </div>
    <div>
     <Footer />
    </div>


    <Routes>
    <Route path='/faq' Component={FAQ}/>
    <Route Component={NotFound}/>
    </Routes>
    
    </BrowserRouter>
    

  )
}

export default App;