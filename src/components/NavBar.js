import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <div className="Navigation_bar">
        <ul>
            <li><Link to="portfolio/">Home</Link></li>
            <li><Link to="portfolio/projects">Projects</Link></li>
            <li><Link to="portfolio/contact">Contact</Link></li>
        </ul>
      </div>
    );
  }
  
  export default NavBar;