import React from 'react'
import './Navbar.css'
import Logo from '../../assets/frontend_assets/logo.png'; 
import Searchicon from '../../assets/frontend_assets/search_icon.png'
import Basketicon from '../../assets/frontend_assets/basket_icon.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {

  const[menu, setmenu]=useState('home')


  return (
    <div>
      <div className="navbar">
        <img src={Logo} alt='logo' className='logo'></img>
        <ul className='navbar-menu'>
          <Link to="/"><li onClick={()=> setmenu('home')}  className={menu === "home" ? "active" : ""}>Home</li></Link>
          <Link to="/menu"><li onClick={()=> setmenu('menu')} className={menu === "menu" ? "active" : ""}>Menu</li></Link>
          <Link to="/mobile-app"><li onClick={()=> setmenu('mobile-app')} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</li></Link>
          <Link to="/contact-us"><li onClick={()=> setmenu('contact-us')} className={menu === "contact-us" ? "active" : ""}>Contact Us</li></Link>
        </ul>
        <div className="navbar-right">
          <img src={Searchicon} alt='search'></img>
          <div className="navbar-search-icon">
            <Link to="/cart">
          <img src={Basketicon} alt='Basket'></img>
          </Link>
          <div className="dot"></div>
          </div>
          <Link to="/sign-in">
          <button>Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
