import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;



export const Img = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 50px;
`;

export const TextGroup = styled.div`
  font-size: 60px;
  /* font-weight: bold; */
  font-family: 'dohyeon';
`;

export const SwingText = styled.div`
  height: 60px;
  overflow: hidden; 
  position: relative;
  margin: 10px 0 15px 0;

  span {
    display: block;
    animation: slideUp 8s infinite ease-in-out;
  }

  @keyframes slideUp {
    0%, 20% {
      transform: translateY(0); /* 첫 번째 텍스트 */
    }
    25%, 45% {
      transform: translateY(-100%); /* 두 번째 텍스트 */
    }
    50%, 70% {
      transform: translateY(-200%); /* 세 번째 텍스트 */
    }
    75%, 95% {
      transform: translateY(-300%); /* 네 번째 텍스트 */
    }
    100% {
      transform: translateY(-400%); /* 첫 번째 텍스트로 자연스럽게 복귀 */
    }
  }
`;


export const ScrollIcon = styled.div`
  position: absolute;
  bottom: 50px; 
  left: 50%; 
  transform: translateX(-50%); 
  font-size: 24px; 
`;


export const Sources = styled.a`
  float: right;
  margin-top: -25px;
  margin-right: 10px;
  font-size: 12px;
  color: grey;
`;