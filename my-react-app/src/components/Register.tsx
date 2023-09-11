import { useState } from "react"
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pass: ""
  });

  const [errorMessages, setErrorMessages] = useState({});

  const handleInputChange = (event:any) => {
    
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email && values.pass) {
      setValid(true);
    }
    setSubmitted(true);
  };

    const [agree, setAgree] = useState(false);
  
    const checkboxHandler = () => {
      // if agree === true, it will be set to false
      // if agree === false, it will be set to true
      setAgree(!agree);
    }
  

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    }
    
    fetch('http://localhost:8080/', config)
      .then(response => response.json())
      .then(result => {
        if (result.error) {
         throw new Error(result.error) 
        }
        setValues(result.firstName);
        setValues(result.lastName);
        setValues(result.email);
        setValues(result.pass);
        <Navigate replace to="/createyourcloset" />


        console.log(errorMessages);
        setErrorMessages({ name: "email", message: errorMessages });
         });
  

  return (
    <div className="register">
      <div className="form-container">
        <h3>SIGN UP</h3>
          <form className="register-form" onSubmit={handleSubmit}>
            {submitted && valid && (
              <div className="success-message">
                <h3>
                  {" "} Welcome {values.firstName} {values.lastName}{" "}
                </h3>
                <div> Your registration was successful! </div>
             </div>
        )}
            {!valid && (
              <input
              className="form-field"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={values.firstName}
              onChange={handleInputChange}
          />
        )}
            {submitted && !values.firstName && (
              <span id="first-name-error">Please enter a first name</span>
        )}

            {!valid && (
              <input
              className="form-field"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={handleInputChange}
          />
        )}

          {submitted && !values.lastName && (
          <span id="last-name-error">Please enter a last name</span>
        )}

          {!valid && (
          <input
            className="form-field"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.email && (
          <span id="email-error">Please enter an email address</span>
        )}

        {!valid && (
          <input
            className="form-field"
            type="pass"
            placeholder="Password"
            name="pass"
            value={values.pass}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.email && (
          <span id="email-error">Please enter a password </span>
        )}
        
      <div className="Terms">
        <div className="container">
          <div>
            <input type="checkbox" id="agree" onChange={checkboxHandler} />
            <label htmlFor="agree"> I agree to <b>terms and conditions</b></label>
          </div>
        </div>
      </div>
      <br></br>
        {!valid && (
          <button className="form-field-button" type="submit">
            Register
          </button>
        )}
        <Link to="/signin">
        <p> Already a member? <b> Sign in.</b> </p>
        </Link>
      </form>
    </div>
      <img src="Pictures front page/Signup.png" alt="tshirt" id='signuppicture'></img>
    </div>
  );
}

export default Register;