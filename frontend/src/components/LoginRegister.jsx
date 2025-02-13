import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/style.css";

const LoginRegister = () => {
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className="logreg-box">
        <span className="icon-close" onClick={() => navigate("/")}>
          <i className="bx bx-x"></i>
        </span>

        {isRegister ? (
          // Registration Form
          <div className="form-box register">
            <div className="logreg-title">
              <h2>Register</h2>
              <p>Provide details to create an account</p>
            </div>
            <form action="#">
              <div className="input-box">
                <span className="icon"><i className="bx bxs-user"></i></span>
                <input type="text" required />
                <label>Full Name</label>
              </div>
              <div className="input-box">
                <span className="icon"><i className="bx bxs-envelope"></i></span>
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon"><i className="bx bxs-lock-alt"></i></span>
                <input type="password" required />
                <label>Password</label>
              </div>
              <button type="submit" className="btn">Register</button>
              <div className="logreg-link">
                <p>Already have an account? <span onClick={() => setIsRegister(false)}>Login</span></p>
              </div>
            </form>
          </div>
        ) : (
          // Login Form
          <div className="form-box login">
            <div className="logreg-title">
              <h2>Login</h2>
              <p>Access your Real Wealth..!</p>
            </div>
            <form action="#">
              <div className="input-box">
                <span className="icon"><i className="bx bxs-envelope"></i></span>
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon"><i className="bx bxs-lock-alt"></i></span>
                <input type="password" required />
                <label>Password</label>
              </div>
              <button type="submit" className="btn">Login</button>
              <div className="logreg-link">
                <p>Don't have an account? <span onClick={() => setIsRegister(true)}>Register</span></p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
