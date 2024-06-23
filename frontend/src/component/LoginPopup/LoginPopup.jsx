import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./LoginPopup.css";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-popup-inputs">
        {currState==="Login"?<></>:
          <input type="text" placeholder="Your name" required />}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
      <div className="login-popup-condition">
<input className="checkbox" type="checkbox" required/>
<p>By continuing, i agree to the terms of use & privacy policy.</p>
      </div>
      {currState==='Login'
       ? <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span> </p>
     : <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
      }
      </form>
    </div>
  );
};

export default LoginPopup;
