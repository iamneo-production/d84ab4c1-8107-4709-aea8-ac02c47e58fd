import { useState, useEffect } from "react";
import "../Signup/styles.css";

export default function Signup() {
  const initialValues = {
    email: "",
    username: "",
    mobile_number: "",
    password: "",
    confirm_password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const handleOnSubmit = () => {
    console.log(formValues)
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);
  const validate = (values) => {

    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password cannot exceed more than 12 characters";
    } else if (!/([A-Z]+)/g.test(values.password)) {
      errors.password = "Password must have at least one Uppercase Character.";
    } else if (!/[@#*&%^!]/g.test(values.password)) {
      errors.password = "Password must have special Character.";
    } else if (!/[0-9]/g.test(values.password)) {
      errors.password = "Password must have numbers.";
    }
    if (!values.username) {
      errors.username = "Username is required";
    } else if(/^[0-9](?!.*?[^\na-z0-9]{2}).*?[a-z0-9]$/g.test(values.username)){
      errors.username = "Username should not startswith number";
    } else if(/^[@#*&%-^!_](?!.*?[^\na-z0-9]{2}).*?[a-z0-9]$/g.test(values.username)){
      errors.username = "Username should not startswith special character";
    } 

    if (!values.mobile_number) {
      errors.mobile_number = "Mobile number is required";
    } else if (values.mobile_number.length > 10 || values.mobile_number.length < 10 ) {
      errors.mobile_number = "Mobile number should be 10 digits";
    } else if(!(/^[0-9\b]+$/).test(values.mobile_number)){
      errors.mobile_number = "Please enter only digits";
    }else if(!/^((?!(0))[0-9]{10})$/g.test(values.mobile_number)) {
      errors.mobile_number = "mobile number should not start with 0";
    }

    if (!values.confirm_password) {
      errors.confirm_password = "Confirm password is required";
    } else if(values.password !== values.confirm_password) {
      errors.confirm_password = "Password do not match";
    }
   
    return errors;
  };

  return (
    <>
    
    <form onSubmit={handleSubmit}>
      <h1 className="heading">Register</h1>

      <div className="group">
        <input
          placeholder="Enter email"
          type="text"
          name="email"
          autoFocus

          value={formValues.email}
          onChange={handleChange}
        />
        <span className="highlight"></span>
        <span className="bar"></span>
      </div>
      <p>{formErrors.email}</p>

      <div className="group">
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          autoFocus
          value={formValues.username}
          onChange={handleChange}
        />
        <span className="highlight"></span>
        <span className="bar"></span>
        {/* <label>Enter username</label> */}
      </div>
      <p>{formErrors.username}</p>

      <div className="group">
        <input

          type="text"
          name="mobile_number"
          placeholder="Enter mobile number"
          autoFocus
          value={formValues.mobile_number}
          onChange={handleChange}
        />
        <span className="highlight"></span>
        <span className="bar"></span>
        {/* <label>Enter Mobile Number</label> */}
      </div>
      <p>{formErrors.mobile_number}</p>

      <div className="group">
        <input
          name="password"
          autoFocus
          value={formValues.password}
          onChange={handleChange}
          type="password"
          placeholder="password"
        />
        <span className="highlight"></span>
        <span className="bar"></span>
        {/* <label>Password</label> */}
      </div>
      <p>{formErrors.password}</p>

      <div className="group">
        <input
          type="password"
          name="confirm_password"
          placeholder="confirm password"
          autoFocus
          value={formValues.confirm_password}
          onChange={handleChange}
        />{" "}
        <span className="highlight"></span>
        <span className="bar"></span>
        {/* <label>Confirm Password</label> */}
      </div>
      <p>{formErrors.confirm_password}</p>

      <div className="btn-box">
        <button className="btn btn-submit" type="submit" onClick={handleOnSubmit}>
          submit
        </button>
      </div>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success" style={{color : "green",fontWeight: "bolder",fontSize:20}}>Registered successfully!!</div>
      ) :null
    }
      <div className="navigate">
        Already a user ? <a href="/login">Login</a>
      </div>
    </form>
    </>
  );
}
