import React, { useEffect, useRef, useState } from "react";
import {
  BottomSection,
  Container,
  Contents,
  LinkCard,
  LinkCardGroup,
  Title,
  TopSection,
} from "./AboutStyle.tsx";
import { useAnimation } from "framer-motion";
import { IoIosSchool } from "react-icons/io";
import { HiBuildingOffice } from "react-icons/hi2";
import { PiCertificateFill } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topSection = document.getElementById("top-section");
      if (topSection) {
        const rect = topSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <Container>
      <Title>About Me</Title>
      <Contents>
        <TopSection id="top-section" className={isVisible ? "visible" : ""}>

          <div className="education item">
            <IoIosSchool size={100} className="icon"/>
            <div className="text-wrapper">
              <div className="large-text">
                한국방송통신대학교 <span>컴퓨터과학과(4년)</span>
              </div>
              <div className="small-text">2020.03 ~ 2023.02 (졸업)</div>
              <div className="large-text">
                동양미래대학교 <span>정보통신과(2,3년)</span>
              </div>
              <div className="small-text">2013.03 ~ 2016.02 (졸업)</div>
            </div>
          </div>
          <div className="career item">
            <HiBuildingOffice size={90} className="icon"/>
            <div className="text-wrapper">
              <div className="large-text">프론트엔드 개발자 (2년)</div>
              <div className="small-text">비엠텍시스템 2022.03 ~ 2024.02</div>
            </div>
          </div>
          <div className="certificate item">
            <PiCertificateFill size={95} className="icon"/>
            <div className="text-wrapper">
              <div className="large-text">정보처리기사</div>
              <div className="small-text">2021.06</div>
              <div className="large-text">정보처리산업기사</div>
              <div className="small-text">2015.10</div>
            </div>
          </div>
        </TopSection>
        <BottomSection>
          <LinkCardGroup>
            <LinkCard>
              <IoIosMail size={55} className="mail-icon"/>
              <div className="card-text" >
                Mail
              </div>
            </LinkCard>
            <LinkCard>
              <img
                src="./img/skill/GitHub-Dark.svg"
                alt="git-icon"
                className="git-icon"
              />
              <div className="card-text">
                Git hub
              </div>
            </LinkCard>
          </LinkCardGroup>
        </BottomSection>
      </Contents>
    </Container>
  );
}
