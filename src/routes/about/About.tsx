import React, { useEffect, useRef, useState } from "react";
import {
  BottomSection,
  buttonHoverAnimation,
  Container,
  Contents,
  LinkCard,
  LinkCardGroup,
  sectionVariants,
  Title,
  TopSection,
} from "./AboutStyle.tsx";
import { useAnimation } from "framer-motion";
import { IoIosSchool } from "react-icons/io";
import { HiBuildingOffice } from "react-icons/hi2";
import { PiCertificateFill } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";

export default function About() {
  const sectionControls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionControls.start("visible");
          } else {
            sectionControls.start("hidden");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [sectionControls]);

  const onClickGoGithub = () => {
    window.open('https://github.com/2eunh');
  }
  const onClickGoMail = () => {
    window.location.href = 'mailto:eunh_2@naver.com';
  }

  return (
    <Container>
      <Title>About Me</Title>
      <Contents>
        <TopSection
          id="top-section"
          ref={ref}
          variants={sectionVariants}
          initial="hidden"
          animate={sectionControls}
        >
          <div className="education item">
            <IoIosSchool className="icon" />
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
          <div className="medium-section">
            <div className="career item">
              <HiBuildingOffice  className="icon" />
              <div className="text-wrapper">
                <div className="large-text">프론트엔드 개발자 (2년)</div>
                <div className="small-text">비엠텍시스템 2022.03 ~ 2024.02</div>
              </div>
            </div>
            <div className="certificate item">
              <PiCertificateFill  className="icon" />
              <div className="text-wrapper">
                <div className="large-text">정보처리기사</div>
                <div className="small-text">2021.06</div>
                <div className="large-text">정보처리산업기사</div>
                <div className="small-text">2015.10</div>
              </div>
            </div>
          </div>
        </TopSection>
        <BottomSection>
          <LinkCardGroup
            initial="hidden"
          >
            <LinkCard whileHover={buttonHoverAnimation} animate={{ rotate: 0 }} onClick={()=>onClickGoMail()}>
              <IoIosMail className="mail-icon" />
              <div className="card-text">Mail</div>
            </LinkCard>
            <LinkCard whileHover={buttonHoverAnimation} animate={{ rotate: 0 }} onClick={()=>onClickGoGithub()}>
              <img
                src="./img/skill/GitHub-Dark.svg"
                alt="git-icon"
                className="git-icon"
              />
              <div className="card-text">Git hub</div>
            </LinkCard>
          </LinkCardGroup>
        </BottomSection>
      </Contents>
    </Container>
  );
}
