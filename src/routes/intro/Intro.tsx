import React from "react";
import { Container, Img, ScrollIcon, Sources, SwingText, TextGroup } from "./IntroStyle.tsx";

export default function Intro() {
  const texts = [
    "더 좋은 코드를 고민하는",
    "사용자 경험을 중요시하는",
    "협업을 위해 배려하는",
    "성장을 위해 공부하는",
  ];

  return (
    <>
      <Container>
        <Img src="./img/free-icon-developer-4661318.png" alt="개발자 이미지"/>
        <TextGroup>
          <span>안녕하세요 :)</span>
          <SwingText>
            {texts.concat(texts[0]).map((text, index) => (
              <span key={index}>{`"${text}"`}</span>
            ))}
          </SwingText>
          <span>프론트엔드 개발자 이은혜입니다.</span>
        </TextGroup>
        <ScrollIcon>
          <img src="./img/icon_scroll.png" alt="" />
        </ScrollIcon>
      </Container>
      <Sources href="https://www.flaticon.com/kr/free-icons/" title="개발자 이미지">이미지 제작자: Flat Icons - Flaticon</Sources>
    </>
  );
}

