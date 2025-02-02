import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
function Navbar() {

  return (
    <nav>
      <div className='navbar'>
        <ul>
        <li>
            <Link to="#">
              Home
            </Link>
          </li>
          <li>
            <Link to="#">
              About
            </Link>
          </li>
          <li>
            <Link to="/organization">
              Organization
            </Link>
          </li>
          <li>
            <Link to="/chatbot">
              ChatBot
            </Link>
          </li>
        </ul>
        <Link to="/login">
          Logout
        </Link>
        </div>
    </nav>
  );
};

export default Navbar