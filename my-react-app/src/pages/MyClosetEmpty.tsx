import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar(userloged)";
import { Link } from "react-router-dom";

const MyClosetEmpty = () => {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
     
      
    }
  }, []);

  //if (!authenticated) {
    //return <Navigate replace to="/signin" />
  //} else {


  
    return (

      <div>
      <div className="navbar(userloged)"> 
        <Navbar />
      </div>
        <div className="emptycloset">
          <img src="PicturesCloset/EmptyCloset.png" alt="emptycloset" id='emptycloset'></img>
          <h3> YOUR CLOSET IS EMPTY </h3>
          <div>
          <Link to="additem"> <button>CREATE YOUR CLOSET</button></Link>
          </div>
        </div>
      </div>
     
    );
  }

export default MyClosetEmpty;