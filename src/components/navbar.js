import React from 'react';
import './navbar.css';
import webLogo from '../assets/webLogo.jpg';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className='navBar'>
        <img src={webLogo} alt='logo'/>
        <div className="navMenu">
            <Link className='menuItems'>Home</Link>
            <Link className='menuItems'>About</Link>
            <Link className='menuItems'>Portfolio</Link>
        </div>
        <button className='menuButton'>
             <img src="" alt="" className="contact" /> Contact Me
        </button>    
    </nav>
  )
}
    