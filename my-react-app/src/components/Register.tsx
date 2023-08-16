import { useState } from "react"
import {Link} from 'react-router-dom'

function Register() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pass: ""
  });

  const handleInputChange = (event) => {
    /* event.persist(); NO LONGER USED IN v.17*/
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
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
      // Don't miss the exclamation mark
    }
  
    // When the button is clicked
    const btnHandler = () => {
      alert('The buttion is clickable!');
    };
  

  return (
    <div className="register">
    <div className="form-container">
    <h3>SIGN UP</h3>
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid && (
          <div className="success-message">
            <h3>
              {" "}
              Welcome {values.firstName} {values.lastName}{" "}
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
            name="email"
            value={values.email}
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
        <Link to="/Login">
        <p> Already a member? <b> Sign in.</b> </p>
        </Link>
      </form>
    </div>
    <img src="Pictures front page/Signup.png" alt="tshirt" id='signuppicture'></img>
    </div>
  );
}

export default Register;