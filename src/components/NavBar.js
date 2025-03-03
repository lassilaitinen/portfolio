import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <div className="Navigation_bar">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    );
  }
  
  export default NavBar;