import React from 'react'
import Fade from "react-reveal/Fade"
import '../styles/work.css'
import "../styles/slick.css"; 
import "../styles/slick-theme.css";
import Slider from "react-slick";
import Hunsu1 from "../images/메인1.png"
import Hunsu2 from "../images/실채훈.png"
import Hunsu3 from "../images/ootd1.png"
import Hunsu4 from "../images/ootd2.png"
import Hunsu5 from "../images/뭘입을까1.png"
import Hunsu6 from "../images/뭘입을까2.png"
import Hunsu7 from "../images/마이페이지 (1).png"
import Walk1 from "../images/기록일지.png"
import Walk2 from "../images/산책1.png"
import Walk3 from "../images/산책2.png"
import Walk4 from "../images/성분분석.png"
import Walk5 from "../images/마이페이지.png"
import Walk6 from "../images/로그인_회원가입.png"
import Poke1 from "../images/1.png"
import Poke2 from "../images/2.png"
import Poke3 from "../images/3.png"
import Poke4 from "../images/4.png"
import Poke5 from "../images/5.png"


const Work = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="work-section" id="work">
      <div className="work-container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Work</h1>
          </Fade>
          <div className="hunsu-box">
            <div className="hunsu-carousel">
              <Slider {...settings}>
                <div>
                  <img src={Hunsu1} alt="" />
                </div>
                <div>
                <img src={Hunsu2} alt="" />
                </div>
                <div>
                <img src={Hunsu3} alt="" />
                </div>
                <div>
                <img src={Hunsu4} alt="" />
                </div>
                <div>
                <img src={Hunsu5} alt="" />
                </div>
                <div>
                <img src={Hunsu6} alt="" />
                </div>
                <div>
                <img src={Hunsu7} alt="" />
                </div>
              </Slider>
            </div>
            <div className="hunsu-desc">
              꺄르르
            </div>
          </div>
          <div className="walk-box">
            <div className="walk-carousel">
              <Slider {...settings}>
                <div>
                  <img src={Walk1} alt="" />
                </div>
                <div>
                <img src={Walk2} alt="" />
                </div>
                <div>
                <img src={Walk3} alt="" />
                </div>
                <div>
                <img src={Walk4} alt="" />
                </div>
                <div>
                <img src={Walk5} alt="" />
                </div>
                <div>
                <img src={Walk6} alt="" />
                </div>
              </Slider>
            </div>
            <div className="walk-desc">
              꺄르르
            </div>
          </div>
          <div className="poke-box">
            <div className="poke-carousel">
              <Slider {...settings}>
                <div>
                  <img src={Poke1} alt="" />
                </div>
                <div>
                <img src={Poke2} alt="" />
                </div>
                <div>
                <img src={Poke3} alt="" />
                </div>
                <div>
                <img src={Poke4} alt="" />
                </div>
                <div>
                <img src={Poke5} alt="" />
                </div>
              </Slider>
            </div>
            <div className="poke-desc">
              꺄르르
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
