import React from 'react'
import Fade from "react-reveal/Fade"
import AboutImage from '../images/me.jpg'
import SkillsImage from "../images/skills.png"
import { FcBusinesswoman, FcCalendar, FcPhone, FcFeedback, FcGraduationCap, 
  FcReading, FcIdea } from "react-icons/fc"
import '../styles/about.css'

const About = () => {
  return (
    <div className="section" id="about">
      <div className="about-container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <div className="about-details">
              <div className="detail-short">
                <FcBusinesswoman size="30"/> <p style={{paddingBottom: '3px'}}>최진영</p>
              </div>
              <div className="detail-short">
                <FcCalendar size="30"/> <p>95.09.07</p>
              </div>
              <div className="detail">
                <FcPhone size="30"/> <p style={{paddingBottom: '3px'}}>010-9157-9766</p>
              </div>
              <div className="detail">
                <FcFeedback size="30"/> <p>gnyonge@gmail.com</p>
              </div>
            </div>
            <div className="about-details-block">
              <div className="detail">
                <FcGraduationCap size="30"/> <p>중국 渤海大学(발해대학) 금융학과 졸업</p>
              </div>
              <div className="detail">
                <FcReading size="30"/> <p>삼성 청년 소프트웨어 아카데미(SSAFY) 4기 수료</p>
              </div>
              <div className="detail">
                <FcIdea size="30"/> <p>Skills</p>
              </div>
              <div className="detail">
                <img src={SkillsImage} alt="skills" style={{width: '90%'}}/> 
              </div>
            </div>
          </div>
          <div className="image-wrapper">
            <img src={AboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
