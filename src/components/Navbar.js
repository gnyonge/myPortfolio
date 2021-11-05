import React from 'react'

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          네브바
          <div
            role="button"
            className="name"
            tabIndex={0}
          >
            Portfolio.
          </div>
          <div className="links-wrapper">
            <button><a href="#header">Top</a></button>
            <button><a href="#about">About</a></button>
            <button><a href="#work">Work</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
