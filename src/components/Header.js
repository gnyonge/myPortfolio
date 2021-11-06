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
              Hi, I'm 최진영{" "}
              <span role="img" aria-label="Emoji">
                👋
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
                Portfolio
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>안녕하세요.</p>
            <p>배우는 것을 좋아하는 프론트엔드 개발자입니다!</p>
            <p>1px도 놓치지 않으려는 꼼꼼함이 특징입니다!</p>
          </Fade>
          <Fade bottom>
            <button
              className="primary-btn"
            ><a href="#about">More ↓</a>
            </button>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
