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
import Poke4 from "../images/5.png"
import { FcCheckmark } from "react-icons/fc";


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
          <div className="work-box">
            <h2>Hunsu (훈수)</h2>
            <h3>2021.01.06 ~ 2021.02.19 (6人 팀 프로젝트)</h3>
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
              <strong>'패션' 이라는 주제로 소통의 장을 열 수 있는 패션 커뮤니티 사이트</strong>입니다. <br /><br />
              주요 기능은 <strong>실시간</strong> 채팅방에서 소통하며 패션 '훈수'를 주고 받을 수 있는 서비스와 
              오늘 나의 패션을 자랑하는 <strong>#OOTD</strong> (Outfit Of The Day)
              , 그리고 패션에 대한 고민을 해결해줄 투표기능이 있는 <strong>뭘 입을까?</strong> 가 있습니다.
              <br /> <br />
              여러 커뮤니티와 쇼핑몰 어플들을 이용하면서 옷에 대한 센스가 부족한 사람들은 어디서 도움을 받을 수 있을까 생각하다가
              만들게 된 'Hunsu' 입니다. <br /> <br />
              {/* 처음으로 다인원으로 진행한 프로젝트였고 백엔드 개발자와 협업하는 방법을 배울 수 있었던 프로젝트였습니다. <br /> */}
              {/* 제가 맡은 #OOTD 파트를 개발중에 api 응답이 제대로 오지않아 '어떠한 부분이 제대로 오지 않는다, 확인 부탁드린다.' 전달하면 */}
              {/* 바로 백엔드를 담당한 팀원이 확인하고 수정하며 순조롭게 협업을 할 수 있었습니다. <br /> */}
              초반 백엔드와 소통의 어려움을 Figma와 구글시트를 사용해 UI/UX 및 API 명세를 문서화하여 해결하였습니다. 
              이를 통해 문서화의 중요성과 <strong>백엔드 개발자와 협업하는 방법</strong>도 배울 수 있었습니다. 
              <br /><br />
              뿐만 아니라, Vuex를 사용할 때 반복되는 코드를 줄이기 위해 파일을 따로 
              생성해서 Import하여 사용하는 등 혼자 공부했을 때는 몰랐던 여러가지 코드 작성법들을 배울 수 있었습니다.
              <br /><br /> <hr />  <br />
              <div className="desc-box">
                <div className="desc-title">
                  <FcCheckmark size="30"/><p>My role</p> 
                </div>
                <div className="desc-content">
                UI/UX 디자인, 프론트엔드 (#OOTD 파트, 메인페이지) 
                </div>
              </div>
              <div className="desc-box">
                <div className="desc-title">
                  <FcCheckmark size="30"/><p>Front-end</p> 
                </div>
                <div className="desc-content">
                  Vue.js, Vuex, Vuetify
                </div>
              </div>
              <div className="desc-box">
                <div className="desc-title">
                  <FcCheckmark size="30"/><p>Back-end</p> 
                </div>
                <div className="desc-content">
                Spring Boot, Swagger, Stomp
                </div>
              </div>
              <div className="desc-box">
                <div className="desc-title">
                  <FcCheckmark size="30"/><p>GitHub</p> 
                </div>
                <div className="desc-content">
                <a href="https://github.com/gnyonge/Hunsu-project">바로가기</a>
                </div>
              </div>
              
                        
              </div>
            </div>
          </div>
          <div className="work-box">
            <h2>Walkie Doggie (워키도기)</h2>
            <h3>2021.04.12 ~ 2021.05.28 (6人 팀 프로젝트)</h3>
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
            <div className="desc-container">
              <div className="walk-desc1">
                <strong>반려견과 견주를 위한 위치기반 종합 서비스</strong>입니다. <br /><br />
                주요 기능은 <strong>반려견 일기 및 산책기록 확인, 실시간 산책경로 확인 및 현재 위치를 기반으로한 SNS기능, 
                OCR을 이용한 사료, 간식 성분분석</strong>이 있습니다. <br /><br />
                프로젝트 도중, 오류가 많아서 개발 진행에 어려움이 있었습니다. 하지만 <strong>비동기처리를 적용하고 해결</strong>해보면서 
                자바스크립트에 대한 개념을 더욱 확실하게 익힐 수 있었고 어려움을 극복하면서 개발에 더 재미를 느꼈습니다. <br /><br />
                <strong>사용자를 위한 UI/UX 개선</strong>을 위해 전체적인 디자인도 중간에 새롭게 수정을 하였습니다. 시간이 부족해 고민도 하였지만
                사용자의 입장에서 보았을 때 훨씬 나은 결과물을 내었습니다. <br /><br />


                
              </div>
              <div className="walk-desc2">
              <strong>라우팅을 하면서 탭이 같이 이동하지 않는 문제, 지도에 핀이 찍히지 않는 문제</strong>와 같이
              개발 도중에 잘 해결되지 않는 문제들을 서로 도와주고 해결해 나가면서 팀워크도 더 좋아지고 
              <strong>스스로 성장을 굉장히 많이 했던 프로젝트</strong>입니다.<br /><br /> <hr />  <br />
              <div className="desc-box">
                <div className="desc-title">
                  <FcCheckmark size="30"/><p>My role</p> 
                </div>
                <div className="desc-content">
                UI/UX 디자인, 프론트엔드 (일기, 성분분석, 마이페이지) 
                </div>
              </div>
              <div className="desc-box">
                <div className="desc-title">
                  <FcCheckmark size="30"/><p>Front-end</p> 
                </div>
                <div className="desc-content">
                  Vue.js, Vuex, Vuetify
                </div>
              </div>
              <div className="desc-box">
                <div className="desc-title">
                  <FcCheckmark size="30"/><p>Back-end</p> 
                </div>
                <div className="desc-content">
                Spring Boot, Nginx, Jenkins
                </div>
              </div>
              <div className="desc-box">
                <div className="desc-title">
                  <FcCheckmark size="30"/><p>GitHub</p> 
                </div>
                <div className="desc-content">
                <a href="https://github.com/gnyonge/Walkie-Doggie">바로가기</a>
                </div>
              </div>
              
                        
              </div>
            </div>

          </div>
          </div>
          <div className="work-box">
            <h2>포켓몬</h2>
            <h3>2021.10.21 ~ 2021.10.30 (1人 개인 프로젝트)</h3>
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
              </Slider>
            </div>
            <div className="desc-container">
              <div className="walk-desc1">
                포켓몬들의 세부 정보를 확인하고 자유롭게 포켓몬을 잡을 수 있는 <strong>첫 리액트 프로젝트</strong>입니다. 
                잡은 포켓몬들은 나의 가방에서 확인이 가능합니다. <br /><br />

                많은 기능이 있는 프로젝트는 아니지만 Vue.js로만 프론트엔드 개발을 했었기 때문에 리액트를 처음 접하면서 적응하는데에 시간이 
                조금 걸렸습니다. <br /><br /> 예를 들면, <strong>'useState라는 hook을 쓰는데 어떤 함수안에서 
                  변수를 set하면 변수가 그 다음줄에서 바로 변하지 않고 어떻게 
                바뀔지 예약해뒀다가 함수가 종료되면 예약된 대로 변수를 수정하고 다시 컴포넌트를 렌더한다' </strong> 
                이 부분을 알지 못했었기 때문에 혼자 고민하다가 개발자 커뮤니티에서 답을 얻기도 했습니다. <br /><br />

                포켓몬을 잡을 때 포켓몬데이터를 저장하기 위해서 <strong>redux를 사용</strong>했습니다. Vuex와 원리는 비슷했기 때문에 
                기본 사용법을 검색해서 익힌 후에 바로 사용해보았습니다. props로 주고받는것 보다 훨씬 편리하다고 느꼈습니다.
                
              </div>
              <div className="walk-desc2 deploy-box">
              <strong>React 관련 기술 습득에 초점을 둔 프로젝트</strong>이고 처음 GitHub pages로 배포까지 해보았습니다.<br /><br />
              새로운 기술을 혼자 익히고 프로젝트까지 해보는 것이 처음이라서 많은 어려움이 있었지만 이 포켓몬 프로젝트를 하면서
              프론트엔드 개발에 대해 더 욕심을 가지게 되었습니다. 
              <br /><br /> <hr />  <br />
              <div className="desc-box">
                <div className="desc-title">
                  <FcCheckmark size="30"/><p>Front-end</p> 
                </div>
                <div className="desc-content">
                  React, Redux
                </div>
              </div>
              <div className="desc-box">
                <div className="desc-title">
                  <FcCheckmark size="30"/><p>Deployment</p> 
                </div>
                <div className="desc-content">
                GitHub
                </div>
              </div>
              <div className="desc-box">
                <div className="desc-title">
                  <FcCheckmark size="30"/><p>GitHub</p> 
                </div>
                <div className="desc-content">
                <a href="https://github.com/gnyonge/Pokemon-project">바로가기</a>
                </div>
              </div>
              
                        
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
