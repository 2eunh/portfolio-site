import { motion } from "framer-motion";
import styled from "styled-components";
import media from "../../MediaQuery.tsx";

export const Container = styled.div`
  min-height: 100vh; 
  /* text-align: center; */
  padding-top: 100px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 70px;
  font-family: 'montserrat';
  margin: 30px auto;
  text-align: center;
  ${media.medium`
    font-size: 60px;
  `};
  ${media.small`
    margin: 0px auto;
    font-size: 50px;
  `};
  ${media.xsmall`
    margin: 15px auto;
    font-size: 40px;
  `};
`;

export const Contents = styled.div`
  margin-top: 30px;
  height: 75vh;
`;




export const TopSection = styled(motion.div)`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  ${media.medium`
    width: 90%;
    margin : 0 auto;
    gap: 80px;
    margin-left : 40px;
  `};
  ${media.small`
    flex-direction: column;
    width: 100%;
    gap: 30px;
    margin-left : 0px;
    margin-top : 50px;
  `};
  .education{
    ${media.small`
      display: flex; 
      justify-content: center;
      align-items: center;
      width: 100%; 
    `};
  }
  .medium-section{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 200px;
    ${media.medium`
      gap: 7%;
      margin-left : 10px;
    `};
  }
  .item{
    height: 180px;
    font-family: 'dohyeon';
    position: relative;
    ${media.small`
      flex-direction: column;
      width: 100%;
      height: 150px;
    `};
    .text-wrapper{
      margin-top: 30px;
      position: relative;
      .large-text{
        font-size: 33px;
        margin-top: 10px;
        font-family: 'dohyeon';
        ${media.medium`
          font-size: 24px;
        `};
        ${media.small`
          font-size: 22px;
        `};
        ${media.xsmall`
          font-size: 18px;
        `};
      }
      .small-text{
        margin: 5px 2px;
        font-size: 20px;
        color: #424242df;
        ${media.medium`
          font-size: 15px;
        `};
        ${media.small`
          font-size: 13px;
        `};
        ${media.xsmall`
          font-size: 11px;
        `};
      }
    }
    .icon{
      position: absolute;
      color: #ffffffd7;
      opacity: 0.3;
      margin-left: -40px;
      width : 100px;
      height : 100px;
      ${media.medium`
        width : 80px;
        height : 80px;
      `};
      ${media.small`
        display : none;
      `};
    }
  }
`;

export const BottomSection = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  ${media.small`
    width: 100%;
    margin-top : -50px;
  `};
`;

export const LinkCardGroup = styled(motion.div)`
  display: flex;
  gap: 150px;
  margin-top: 50px;
  ${media.small`
    gap: 30px;
    margin-top: 0px;
    align-items : center;
    justify-content: center;
  `};
  ${media.xsmall`
  `};
`;
export const LinkCard = styled(motion.div)`
  width: 200px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #eeecec60;
  border-radius: 15px;
  ${media.medium`
    width: 180px;
    height: 70px;
  `};
  ${media.small`
    width: 150px;
    height: 60px;
  `};
  ${media.xsmall`
  `};

  & {
  transition: background-color 0.3s ease-in-out;
  }

  &:hover {
    background-color: #eeececca;
  }

  cursor: pointer;

  .mail-icon{
    width: 50px;
    height: 50px;
    ${media.medium`
      width: 45px;
      height: 45px;
    `};
    ${media.small`
      width: 35px;
      height: 35px;
    `};
    ${media.xsmall`
    `};
  }
  .git-icon{
    width: 40px;
    height: 40px;
    
    ${media.medium`
      width: 35px;
      height: 35px;
    `};
    ${media.small`
      width: 30px;
      height: 30px;
    `};
  }
  .card-text{
    font-family: 'montserrat';
    font-weight: bold;
    font-size: 23px;
    ${media.medium`
      font-size: 20px;
    `};
    ${media.small`
      font-size: 17px;
    `};
  }
`;

export const sectionVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: -10, opacity: 1, transition: { duration: 1.3 } },
};


export const buttonHoverAnimation = {
  rotate: [0, -5, 5, -5, 5, 0], // 좌우로 흔들리는 효과
  transition: { duration: 0.6, ease: "easeInOut" },
};