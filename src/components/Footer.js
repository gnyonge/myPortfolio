import React from 'react'
import Fade from "react-reveal/Fade"
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <Fade bottom cascade>
          <h2>읽어주셔서 감사합니다!</h2>
        </Fade>
      </div>
    </div>
  )
}

export default Footer
