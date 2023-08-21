import { Link } from "react-router-dom";
const Navbar = () => {
    return (

    <div className="navbar2">
    <img src="Logo/logo2.png" alt="logo" id='logo'></img>
         <li>
        <Link to="/">HOME</Link>
        </li>
        <li>
        <Link to="myprofile"> MY PROFILE</Link>
        </li>
        <li>
        <Link to="mycloset"> MY CLOSET </Link>
        </li>
        <li>
        <Link to="mystatistics"> MY STATISTICS</Link>
        </li>
        </div>
  
    )
}

export default Navbar