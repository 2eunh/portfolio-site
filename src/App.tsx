import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/header/Header.tsx';
import Intro from './routes/intro/Intro.tsx';
import Portfolio from './routes/portfolio/portfolio.tsx';
import Skill from './routes/skill/Skill.tsx';
import styled from 'styled-components';
import About from './routes/about/About.tsx';

function App() {
  const outerDivRef = useRef<HTMLDivElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      if (!outerDivRef.current || isModalOpen ) return;
      
  
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current;
      const pageHeight = window.innerHeight; // 한 페이지 높이
  
      // 현재 페이지 계산
      const currentPage = Math.round(scrollTop / (pageHeight ));
  
      if (deltaY > 0) {
        // 아래로 스크롤
        if (currentPage < 4) {
          const nextPageTop = (currentPage + 1) * (pageHeight );
          outerDivRef.current.scrollTo({
            top: nextPageTop,
            left: 0,
            behavior: "smooth",
          });
        }
      } else if (deltaY < 0) {
        // 위로 스크롤
        if (currentPage > 0) {
          const prevPageTop = (currentPage - 1) * (pageHeight );
          outerDivRef.current.scrollTo({
            top: prevPageTop,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };
  
    const outerDivRefCurrent = outerDivRef.current;
    if (outerDivRefCurrent) {
      outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    }
    return () => {
      if (outerDivRefCurrent) {
        outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
      }
    };
  }, [isModalOpen]);
  
  
  return (
    <AppContainer>
      <Header />
      <Outer ref={outerDivRef} id="outer-div">
        <Inner>
          <Intro />
        </Inner>
        <Inner>
          <About />
        </Inner>
        <Inner>
          <Portfolio setIsModalOpen={setIsModalOpen} />
        </Inner>
        <Inner>
          <Skill />
        </Inner>
      </Outer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh; 
  overflow: hidden;
  background-image: linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);
  background-size: 200% 200%;
  animation: gradientAnimation 6s linear infinite alternate;
  @keyframes gradientAnimation {
    0% {
        background-position: 10% 10%;
    }
    100% {
        background-position: 90% 90%;
    }
}
`;

const Outer = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const Inner = styled.div`
  height: 100%;
`;

