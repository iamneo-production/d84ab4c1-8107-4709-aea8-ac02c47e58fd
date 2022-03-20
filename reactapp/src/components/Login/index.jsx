import React, { useState,useEffect } from "react";
import "../Login/index.css";

export default function Login() {

  const initialValues = { email: "", password: "" };
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
    handleOnSubmit();
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
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } 
    else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    }
    else if (values.password.length > 12) {
      errors.password = "Password cannot exceed more than 12 characters";
    }
    else if (!(/([A-Z]+)/g.test(values.password))) {
      errors.password="Password must have at least one Uppercase Character.";
    }
    else if (!(/[@#*&%^!]/g.test(values.password))) {
      errors.password="Password must have special Character.";
    }
    else if (!(/[0-9]/g.test(values.password))) {
      errors.password="Password must have numbers.";
    }
    
    return errors;
  };


 
  return (
    <>


    


    <form onSubmit={handleSubmit}>
    <h1 className="heading">Login</h1>
    
    
    <div className="group">
      <input 
      type="text"
      name="email"
      placeholder="Enter Email"
      autoFocus
       value={formValues.email}
      onChange={handleChange}
              
      />
      <span className="highlight"></span>
      <span className="bar"></span>
      {/* <label>Enter Email</label> */}
    </div>
    <p>{formErrors.email}</p>
    
    <div className="group">
      <input type="password"
      name="password"
      placeholder="Enter Password"
      value={formValues.password}
      onChange={handleChange}

       /><span className="highlight"></span><span className="bar"></span>
      {/* <label>Enter Password</label> */}
    </div>
    <p>{formErrors.password}</p>
   
    <div className="btn-box">
      <button onClick="removeRequired(this.form)" className="btn btn-submit" type="submit">Login</button>
       </div>
       {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success" style={{color: "green",fontWeight:"bolder",fontSize:20}}>Signed in successfully!!</div>
      ) :null
    }
    <div className="navigate">New user?  <a href="/signup">Sign Up</a></div>
  </form>
  </>
  );
}