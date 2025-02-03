import styled from "styled-components";
import media from "../../MediaQuery.tsx";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${media.small`
    flex-direction: column;
  `};
`;



export const Img = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 50px;
  ${media.medium`
    width: 170px;
    height: 170px;
  `};
  ${media.small`
    width: 110px;
    height: 110px;
    margin : 0 0 20px 30px;
    align-self: flex-start;
  `};
  ${media.xsmall`
    width: 100px;
    height: 100px;
    margin-bottom : 20px;
    margin-left : 10%;
    align-self: flex-start;
  `};
`;

export const TextGroup = styled.div`
  font-size: 60px;
  font-family: 'dohyeon';
  ${media.medium`
    font-size: 45px;
  `};
  ${media.small`
    font-size: 32px;
  `};
  ${media.xsmall`
    font-size: 25px;
  `};
`;

export const SwingText = styled.div`
  height: 60px;
  overflow: hidden; 
  position: relative;
  margin: 10px 0 15px 0;
  ${media.medium`
    height: 45px;
  `};
  ${media.small`
    height: 32px;
  `};
  ${media.xsmall`
    height: 25px;
  `};

  span {
    display: block;
    animation: slideUp 8s infinite ease-in-out;
  }

  @keyframes slideUp {
    0%, 20% {
      transform: translateY(0); 
    }
    25%, 45% {
      transform: translateY(-100%); 
    }
    50%, 70% {
      transform: translateY(-200%);
    }
    75%, 95% {
      transform: translateY(-300%); 
    }
    100% {
      transform: translateY(-400%); 
    }
  }
`;



export const ScrollIcon = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 1s ease infinite; 

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  ${media.medium`
  `};
  ${media.small`
    left: 45%;
  `};
  ${media.xsmall`

  `};
`;

export const Sources = styled.a`
  float: right;
  margin-top: -25px;
  margin-right: 10px;
  font-size: 12px;
  color: grey;
  ${media.medium`
    font-size: 10px;
  `};
`;
