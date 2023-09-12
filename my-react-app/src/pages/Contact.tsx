import Navbar2 from "../components/Navbar(userloged)"
import '../CSS/PagesInProgress.css'

function Contact() {
    document.documentElement.scrollTop = 0;

    return (
        <div className="navbar(userloged)"> 
          <Navbar2 />
          <div className = 'contact'>
              <h3> Contact (page in progress) </h3>                           
            </div>
        </div>
        );
    }

export default Contact;