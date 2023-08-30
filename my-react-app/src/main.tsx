import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './CSS/MainPage.css'
import './CSS/SignIn.css'
import './CSS/EmptyCloset.css'
import './CSS/AddItem.css'
import './CSS/MyCloset.css'
import './CSS/Navbar(userloged).css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
