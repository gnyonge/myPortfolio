import React from 'react'
import Fade from "react-reveal/Fade"
import '../styles/header.css'

const Header = () => {
  return (
    <div className="section" id="header">
      <div className="header-container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm μ΅μ§μ{" "}
              <span role="img" aria-label="Emoji">
                π
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
              Frontend Developer
              </h1>
              <h1>
                {" "}
                μ΅μ§μ's Portfolio
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>μλνμΈμ.</p>
            <p>λ°°μ°λ κ²μ μ’μνλ νλ‘ νΈμλ κ°λ°μμλλ€!</p>
            <p>1pxλ λμΉμ§ μμΌλ €λ κΌΌκΌΌν¨μ΄ νΉμ§μλλ€!</p>
          </Fade>
          <Fade bottom>
            <button
              className="primary-btn"
            ><a href="#about" style={{fontSize: '18px'}}>More β</a>
            </button>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
