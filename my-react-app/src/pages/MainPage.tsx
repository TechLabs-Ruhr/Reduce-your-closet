import { useRef } from "react";
import Banner from "../components/Banner";
import HowItWorks from '../components/How it works';
import Register from '../components/Register';
import { Link } from "react-router-dom";
import '../CSS/MainPage.css';

function MainPage() {
  const home = useRef(null);
  const howitworks = useRef(null);
  const register = useRef(null);


  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="navbar">
      <img src="Logo/logowhite.png" alt="logo" id='logo'></img>
        <li onClick={() => scrollToSection(home)} className="link" >
          HOME
         </li>
          <li onClick={() => scrollToSection(howitworks)} className="link">
          HOW IT WORKS
          </li>
          <li onClick={() => scrollToSection(register)} className="link">
          REGISTER 
          </li>
          <li>
          <Link to="/signin"> SIGN IN</Link>
          </li>
      </div>
      
      <div className="MainPage">
        <div ref={home} >
         <Banner />
        </div>
        <div ref={howitworks} >
         <HowItWorks />
        </div>
        <div ref={register}>
        <Register />
        </div>
      </div>
    </>
  );
};

export default MainPage;