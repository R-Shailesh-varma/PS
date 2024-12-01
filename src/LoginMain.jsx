import React, { useState } from 'react';
// import './abc.css';
// import {createBrowserRouter , RouterProvider } from 'react-router-dom'

function LoginMain() {
  
  return (
    <>
      <div className="login-div-back">
        <div className="login-box">
          <form >
            <h1>Login</h1>

            <div className="input-box" id="Username">
              <input type="text" placeholder="Username" required />
              <i className="login-fa-solid fa-user" aria-hidden="true"></i>
            </div>

            <div className="input-box" id="Pass">
              <input
                placeholder="Password"
                required
              />
              <i className="fa-solid fa-eye"></i>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className="btn" id="submit-button">
              Login
            </button>

            <div className="register-link">
              <p>
                Don't have an account? <a href="#">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginMain;
