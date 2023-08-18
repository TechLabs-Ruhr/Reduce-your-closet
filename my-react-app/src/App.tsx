import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

//Components
import Nav from './MainPage'
import Footer from './components/Footer'

//Pages
import FAQ from './pages/FAQ'
import NotFound from './pages/NotFound'
//import Login from './pages/Login'


function App() {
  return (
    <BrowserRouter>
      <div> <Nav/> </div>
      <div> <Footer /> </div>

        <Routes>
        <Route path='/faq' Component={FAQ}/>
        <Route Component={NotFound}/>
        </Routes>
    
    </BrowserRouter>
    

  )
}

export default App;