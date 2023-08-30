import Navbar from "../components/Navbar(userloged)"
import '../CSS/PagesInProgress.css'

function MyProfile() {

    return (
        <div className="navbar(userloged)"> 
          <Navbar />
            <div className = 'myprofile'>
              <h3>My Profile (page in progress) </h3>                           
            </div>
        </div>
        );
    }

export default MyProfile;