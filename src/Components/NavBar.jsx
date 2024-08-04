import React, { useState } from 'react';
import "../Style/Navbar.css";
import Logo from "../images/Logo.png";
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='navBg'>
      <img className='logo' src={Logo} alt="Logo"/>
      <button className='hamburger' onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={`links ${isOpen ? 'open' : ''}`}>
        <Link className='navLinks pointer' to="Experience" smooth={true} duration={500} onClick={toggleMenu}><li><b>Experience</b></li></Link>
        <Link className='navLinks pointer' to="Skills" smooth={true} duration={500} onClick={toggleMenu}><li><b>Skills</b></li></Link>
        <Link className='navLinks pointer' to="MyWork" smooth={true} duration={500} onClick={toggleMenu}><li><b>My Work</b></li></Link>
        <Link className='navLinks pointer' to="Contact" smooth={true} duration={500} onClick={toggleMenu}><li><b>Contact</b></li></Link>
      </ul>
    </nav>
  );
}

export default NavBar;
