import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

function Header() {
    const [isMobile, setIsMobile] = useState(false);
    return (
      <div className='navbar'>
        <div className='navlogo'><h1>Julikroy.</h1></div>
        <div >
          <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setIsMobile(false)}
          >
            <li ><a className='headerlink' href='#home'>Home</a> </li>
            <li ><a className='headerlink' href='#about'>About</a></li>
            <li ><a className='headerlink' href='#project'>Project</a></li>
            <li><a className='headerlink' href='#contact'>Contact</a></li>
          </ul>
        </div>
        <button className='toggle-button' onClick={() => setIsMobile(!isMobile)} >
          {isMobile ? ( <FontAwesomeIcon icon={faTimes} /> ) : (  <FontAwesomeIcon icon={faBars} /> )}
        </button>
      </div>
  )
}

export default Header