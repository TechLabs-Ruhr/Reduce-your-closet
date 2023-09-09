import '../CSS/Navbar(userloged).css'

import { Link } from "react-router-dom";
const Navbar2 = () => {
    return (

    <div className="navbar2">
    <img src="Logo/logowhite.png" alt="logo" id='logo'></img>
    <div id='navContainer'>
        <li>
        <Link to="/mycloset"> MY CLOSET </Link>
        </li>
        <li>
        <Link to="/mystatistics"> MY STATISTICS</Link>
        </li>
        <li>
        <Link to="/myprofile"> <img src="profile icon/profile icon.png" alt="profile" id='profile'></img> </Link>
        </li>
        </div>
    </div>
  );
};

export default Navbar2