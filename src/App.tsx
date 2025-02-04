import React, { useEffect, useRef, useState } from 'react';
import Header from './components/header/Header.tsx';
import Intro from './routes/intro/Intro.tsx';
import Portfolio from './routes/portfolio/portfolio.tsx';
import Skill from './routes/skill/Skill.tsx';
import styled from 'styled-components';
import About from './routes/about/About.tsx';

function App() {
  const outerDivRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const setSectionRef = (el: HTMLDivElement | null, index: number) => {
    if (el) sectionRefs.current[index] = el;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!outerDivRef.current) return;

      const scrollTop = outerDivRef.current.scrollTop;
      const pageHeight = window.innerHeight;
      
      // 현재 보고 있는 섹션 인덱스 계산
      const currentIndex = Math.round(scrollTop / pageHeight);
      setActiveIndex(currentIndex);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!outerDivRef.current || isModalOpen) return;

      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current;
      const pageHeight = window.innerHeight;

      const currentPage = Math.round(scrollTop / pageHeight);

      if (deltaY > 0 && currentPage < sectionRefs.current.length - 1) {
        scrollToSection(currentPage + 1);
      } else if (deltaY < 0 && currentPage > 0) {
        scrollToSection(currentPage - 1);
      }
    };

    const outerDivRefCurrent = outerDivRef.current;
    if (outerDivRefCurrent) {
      outerDivRefCurrent.addEventListener("scroll", handleScroll);
      outerDivRefCurrent.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (outerDivRefCurrent) {
        outerDivRefCurrent.removeEventListener("scroll", handleScroll);
        outerDivRefCurrent.removeEventListener("wheel", handleWheel);
      }
    };
  }, [isModalOpen]);

  const scrollToSection = (index: number) => {
    if (outerDivRef.current && sectionRefs.current[index]) {
      const offsetTop = sectionRefs.current[index]!.offsetTop;
      outerDivRef.current.scrollTo({ top: offsetTop, behavior: "smooth" });
      setActiveIndex(index); // 메뉴 활성화 업데이트
    }
  };

  return (
    <AppContainer>
      <Header scrollToSection={scrollToSection} activeIndex={activeIndex} />
      <Outer ref={outerDivRef} id="outer-div">
        <Inner ref={(el) => setSectionRef(el, 0)}>
          <Intro />
        </Inner>
        <Inner ref={(el) => setSectionRef(el, 1)}>
          <About />
        </Inner>
        <Inner ref={(el) => setSectionRef(el, 2)}>
          <Portfolio setIsModalOpen={setIsModalOpen} />
        </Inner>
        <Inner ref={(el) => setSectionRef(el, 3)}>
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

