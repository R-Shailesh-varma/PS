import React, { useState } from "react";
// import './SignUp.css';

function MainBody(){
    
    return(
        <>
            <div className="div-back">
                <div className="login-box">
                    <form onSubmit=''>
                        <h1>Sign-up</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required></input>
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="E-mail" required></input>
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div className="input-box">
                            <input type="number" placeholder="Enter mobile number" required></input>
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required></input>
                            <i className="fa-regular fa-eye-slash"></i>
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Re-enter Password" required></input>
                            <i className="fa-regular fa-eye-slash"></i>
                        </div>
                        <button type="submit" className="btn">SUBMIT</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default MainBody;