import Navbar2 from "../components/Navbar(userloged)"
import '../CSS/PagesInProgress.css'

function MyProfile() {
  document.documentElement.scrollTop = 0;

    return (
        <div className="navbar(userloged)"> 
          <Navbar2 />
            <div className = 'myprofile'>
              <h3>My Profile (page in progress) </h3>                           
            </div>
        </div>
        );
    }

export default MyProfile;