//in progress
import { useState } from "react";
import { Link } from "react-router-dom";
import '../CSS/SignIn.css'

function Signin() {
  document.documentElement.scrollTop = 0;
  
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event:any) => {
    //Prevent page reload
    event.preventDefault();

/*const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username: 'acutalusername', password: 'actualpassword'})
      };
    
      fetch('http://localhost:8080/signin',requestOptions)
        .then((response) => {
          if(! response.ok){
           throw Error(response.statusText);
          }
          response.json()})
        .then((data) => {
           console.log(data);

        setIsSubmitted(true);
           //redirect and set current user
         })
         .catch((err) => {
            console.log(err.message);
        setErrorMessages({ name: "uname", message: err.message });
        //  }); */
  }; 



  // Generate JSX code for error message
  const renderErrorMessage = (name:any) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>

      

    </div>
  );

  return (
    <>
    <div className="login">
      <div className="login-form">
          <Link to="/" > 
            <button className="homepagebutton"> GO BACK TO HOMEPAGE </button> 
          </Link>
          <br></br>  
          <br></br> 
            <div className="title">SIGN IN</div>
              <div className="form">
                <div className="button-container">
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
                </div>
             </div>
           </div>
    </div>
  </>
  );
}

export default Signin;