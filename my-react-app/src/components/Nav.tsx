import {Link} from "react-router-dom";

const Nav =() => {
  return (

<ul className="navbar">
<img src="Logo/logo2.png" alt="logo" id='logo'></img>
         
      <li><Link to= '/'> HOME </Link></li>
      <li><Link to= '/howitworks'> HOW IT WORKS </Link></li>
      <li><Link to= '/faq'> FAQ </Link></li>
      <li><Link to= '/signin'> SIGN IN </Link></li>
</ul>

        );
    };
    export default Nav;