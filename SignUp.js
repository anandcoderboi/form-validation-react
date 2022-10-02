import React from "react";
import "./signup.css";
import { useState } from "react";
import validator from "validator";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [isPasswordValid, setIsPasswordValid] = useState(0);
  const [isEmailValid, setIsEmailValid] = useState(0);
  const [pswd, setPswd] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    if (pswd.length >4 && pswd.length<12 ) {
      alert("Signed Up Successfully");
    }
  };
  function emailHandler(e) {
    let emailEntered = e.target.value;
    console.log(emailEntered);

   
    if (validator.isEmail(emailEntered))
    {
      setEmailError("")
      e.target.style.borderColor = "green";
      console.log("emailEntered")
    }
    else
    {
      setEmailError("invalid email address")
      e.target.style.borderColor = "red";
    }
    setInputEmail(emailEntered);
  }
  const passwordHandler = (e) => {
    let pass = e.target.value;
    let regExp = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/;

    if (pass.length < 4) {
      setPasswordError("Password should be at least 4 characters");
      e.target.style.borderColor = "red";
    } else if (pass.length > 12) {
      setPasswordError("Password shouldnt exceed 12 characters");
      e.target.style.borderColor = "red";
    } else if (!regExp.test(pass)) {
      setPasswordError("Password must contain atleast a number ");
      e.target.style.borderColor = "red";
    } else {
      setPasswordError("");
      e.target.style.borderColor = "green";
      setPswd(pass);
    }
  };
  const confirmPassword = (e) => {
    let pwd = e.target.value;

    if (pwd === pswd) {
      setConfirmError("");
      setIsPasswordValid(1);
      e.target.style.borderColor = "green";
    } else {
      setConfirmError("Passwords didn't match !");
      e.target.style.borderColor = "red";
    }
  };
  return (
    
    <div className="Container">
    <div className="header">
      <h2>Sign Up</h2>
    </div>
    <form className="form" onSubmit={loginHandler}>
      <label>Email</label>
      <input
        type="text"
        name="email"
        placeholder="abc@xyz.com"
        onChange={emailHandler}
      />
      <span className="email-error">{emailError}</span>
      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="type your password"
        onChange={passwordHandler}
      />
      <span className="pass-error">{passwordError}</span>
      <label>Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        placeholder="confirm your password"
      />

      <button className="button" onSubmit={loginHandler}>
        Submit
      </button>
    </form>
    <span className="span">Already have an account?</span>
    <Link to="/Login" className="link">Click here to Log In</Link>
  </div>
);
  }
export default SignUp;
