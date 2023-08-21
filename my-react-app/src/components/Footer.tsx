import { Link } from "react-router-dom";

const Footer =() => {
    return (
    <div className="footer">
    <img src="Logo/logo2.png" alt="logo" id='logofooter'></img> 
    <div className="options">
          <h3> <Link to="createyourcloset/mycloset"> MY CLOSET </Link> </h3>
          <h3><Link to="createyourcloset/mystatistics"> MY STATISTICS</Link> </h3>
          <h3> <Link to="faq"> FAQ </Link> </h3>
          <h3>  <Link to="contact">CONTACT</Link> </h3>
        </div>
        
        <div className="followus">
          <h3> FOLLOW US </h3>
    <img src="Pictures front page\footer socialmedia icons\facebook.png" alt="facebook" id='facebook'></img>
    <img src="Pictures front page\footer socialmedia icons\instagram.png" alt="instagram" id='instagram'></img> 
    <img src="Pictures front page\footer socialmedia icons\twitter.png" alt="twitter" id='twitter'></img> 
    <img src="Pictures front page\footer socialmedia icons\youtube.png" alt="youtube" id='youtube'></img> 
      </div>
    </div>
     
    );
  };
  export default Footer;