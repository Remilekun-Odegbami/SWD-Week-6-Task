import { Link } from 'react-router-dom'

import '../styles/main.css'

import React from 'react';



const NavBar = () => {

       
    return (
     <nav className="navbar links">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        
      </nav>
    )
}

export default NavBar;


