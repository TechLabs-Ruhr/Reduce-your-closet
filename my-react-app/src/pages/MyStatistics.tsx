import Navbar2 from "../components/Navbar(userloged)"
import '../CSS/PagesInProgress.css'

function MyStatistics() {
  document.documentElement.scrollTop = 0;

    return (
      
    <div className="navbar(userloged)"> 
      <Navbar2 />
        <div className = 'mystatistics'>
          <h3>My Statistic (page in progress) </h3>                           
        </div>
    </div>
    );
}

export default MyStatistics;