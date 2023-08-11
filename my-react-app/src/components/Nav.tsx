import {Link} from "react-router-dom";

const Nav =() => {
  return (
    
<div className="nav">
         
          <li>
            <Link to= '/'> ABOUT SMARTROBE </Link>
          </li>
          <li>
            <Link to= '/mycloset'> MY CLOSET </Link>
          </li>
          <li>
            <Link to= '/mystatistics'> MY STATISTICS </Link>
          </li>
          <li>
            <Link to= '/somethingelse'> SOMETHING ELSE </Link>
          </li>
      </div>
        );
    };
    export default Nav;