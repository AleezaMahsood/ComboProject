import React from 'react';
import './Signup.css';
import plateImage from '../assets/signin.png'; 

function Signup() {
  return (
    <div className="body">
    <div className="signup-container">
      <div className="box">
        <div className="image-container">
          <img src={plateImage} alt="Plate" className="plate-image" />
        </div>
        <div className="form-container">
          <h2>Sign Up</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name"></label>
              <input type="name" id="name" name="name" placeholder='Name' required />
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input type="email" id="email" name="email" placeholder='Email' required />
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input type="password" id="password" name="password" placeholder='Password' required />
            </div>
            <button className='signbutton' type="submit">Sign Up</button>
            <p>Already have an account? <span>Login here</span></p>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Signup;
