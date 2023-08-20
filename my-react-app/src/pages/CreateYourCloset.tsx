import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const CreateYourCloset = () => {
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
      <div className="emptycloset">
      <img src="PicturesCloset/EmptyCloset.png" alt="emptycloset" id='emptycloset'></img>
        <h3> YOUR CLOSET IS EMPTY </h3>
        <button>CREATE YOUR CLOSET</button>
      </div>

    );
  }

export default CreateYourCloset;