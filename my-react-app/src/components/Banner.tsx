import { Link } from "react-router-dom"

const Banner =() => {
  
  return (
  <div className="banner">
     <img src="Pictures front page/Banner.png" alt="banner" id='banner'></img>
     <div className="bannertext">
       <h1> WELCOME IN SMARTROBE</h1>
       <h2> AN APPLICATION WHICH WILL MAKE YOUR CLOSET <br></br> FINALLY COME TO ORDER! </h2>
       <Link to="/mycloset"> <button id='CreateClosetButton'>CREATE YOUR CLOSET</button></Link>
    </div>
  </div>
   
  );
};
export default Banner;