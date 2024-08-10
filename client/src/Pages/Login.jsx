import React from 'react';
import './Signup.css';
import plateImage from '../assets/signin.png'; 

function Login() {
  
  return (
    <div className="body">
    <div className="signup-container">
      <div className="box">
        <div className="form-container">
          <h2>Log In</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input type="email" id="email" name="email" placeholder='Email' required />
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input type="password" id="password" name="password" placeholder='Password' required />
            </div>
            <button className='signbutton' type="submit">Log in</button>
            <p>Don't have an account? <span>Signup here</span></p>
          </form>
          </div>
          <div className="image-container">
          <img src={plateImage} alt="Plate" className="plate-image" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
