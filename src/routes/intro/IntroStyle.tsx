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



export const Img = styled.div`
  width: 250px;
  height: 250px;
  margin-right: 30px;
  margin-bottom: 20px;
  img{
    width: 250px;
    height: 250px;
    ${media.medium`
      width: 190px;
      height: 190px;
    `};
    ${media.small`
      width: 120px;
      height: 110px;
    `};
    ${media.xsmall`
      width: 90px;
      height: 85px;
    `};
  }
  ${media.medium`
    width: 190px;
    height: 190px;
  `};
  ${media.small`
    width: 90%;
    height : 130px;
    margin : 0 auto;
  `};
  ${media.xsmall`
    height : 100px;
  `};
`;

export const TextGroup = styled.div`
  font-size: 4rem;
  font-family: 'dohyeon';
  ${media.medium`
    font-size: 3rem;
  `};
  ${media.small`
    font-size: 1.8rem;
    width: 90%;
  `};
  ${media.xsmall`
    font-size: 1.5rem;
  `};
`;

export const SwingText = styled.div`
  height: 4rem;
  overflow: hidden; 
  position: relative;
  margin: 10px 0 15px 0;
  ${media.medium`
    height: 3rem;
  `};
  ${media.small`
    height: 1.8rem;
  `};
  ${media.xsmall`
    height: 1.5rem;
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
  transform: translateX(-50%);
  animation: bounce 1s ease infinite; 
  width : 100%;
  text-align: center;
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
  img{
    ${media.small`
      width : 30px;
    `};
    ${media.xsmall`
      width : 22px;
    `};
  }


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
