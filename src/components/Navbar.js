import React, { useState } from 'react'
import '../styles/navbar.css'

const Navbar = () => {

  const [header, setHeader] = useState(false);
  const changeHeader = () => { 
    if (window.scrollY >= 100) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  window.addEventListener('scroll', changeHeader)
  
  return (
    <div className={header ? 'navbar-wrapper fixed-navbar ' : 'navbar-wrapper'}>
      <div
        role="button"
        className="name"
      >
        Portfolio.
      </div>
      <div className="links-wrapper">
        <a href="#header">Top</a>
        <a href="#about">About</a>
        <a href="#work">Work</a>
      </div>
    </div>
  )
}

export default Navbar
