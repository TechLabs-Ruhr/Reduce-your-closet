import Navbar2 from "../components/Navbar(userloged)"
import { Link } from "react-router-dom"
import '../CSS/EmptyCloset.css'

const MyClosetEmpty = () => {
  document.documentElement.scrollTop = 0;

  //This page is supposed to appear only if user didnt add any items to the closet
  
    return (
      <div>
      <div className="navbar(userloged)"> 
        <Navbar2 />
      </div>
        <div className="emptycloset">
          <img src="PicturesCloset/EmptyCloset.png" alt="emptycloset" id='emptycloset'></img>
          <h3> YOUR CLOSET IS EMPTY </h3>
          <div>
          <Link to="/additem"> <button>CREATE YOUR CLOSET</button></Link>
          </div>
        </div>
      </div> 
    );
  };

export default MyClosetEmpty