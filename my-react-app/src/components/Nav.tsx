import {Link} from "react-router-dom";

const Nav =() => {
  return (

<div className="navbar">
<img src="Logo/logo2.png" alt="logo" id='logo'></img>
         
      <p><Link to= '/'> HOME </Link></p>
      <p><Link to= '/howitworks'> HOW IT WORKS </Link></p>
      <p><Link to= '/faq'> FAQ </Link></p>
      <p><Link to= '/signin'> SIGN IN </Link></p>
</div>

        );
    };
    export default Nav;