import React, { useState } from 'react';
import './Navbar.css';
import Icon from './favicon.ico';
import Icon2 from './logo.jpg';
import Menu from './menu2.png';

import {Link} from 'react-scroll';
const Navbar = () => {
  const [showMenu , setShowMenu] = useState(false);
  return (
   <nav className="navbar">
          <img src={Icon} alt="Logo" className='logo'/>
    <div className="desktop-menu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='menu-items'>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='menu-items'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='menu-items'>Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='menu-items'>Clients</Link>

    </div>
    <button className="desktop-menu-button" onClick={() =>{
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
    }}>
        <img src={Icon2} alt="Icon" className="desktop-menu-img" /> 
        Contact me
    </button>
      <img src={Menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
      <div className="nav-menu" style={{display:showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='list-items' onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='list-items' onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='list-items' onClick={() => setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='list-items' onClick={() => setShowMenu(false)}>Clients</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='list-items' onClick={() => setShowMenu(false)}>Contact</Link>

      </div>
   </nav>
  )
}

export default Navbar
