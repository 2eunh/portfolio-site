import { color, motion } from "framer-motion";
import styled from "styled-components";
import media from "../../MediaQuery.tsx";

export const Container = styled.div`
  min-height: 100vh; 
  text-align: center;
  padding-top: 60px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 70px;
  font-family: 'montserrat';
  margin-bottom: 450px;
  ${media.medium`
    font-size: 60px;
  `};
  ${media.small`
    font-size: 50px;
  `};
  ${media.xsmall`
    font-size: 40px;
  `};
`;

export const SlideCardGroup = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  ${media.medium`
    width: 100%;
    margin-top : -35px;
  `};
  ${media.small`
    width: 100%;
    margin-top : -35px;
  `};
  ${media.xsmall`
    margin-top : -75px;
  `};
`;

export const Row = styled(motion.div)`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(3, 1fr);
  position: absolute;
  width: 90%;
  margin: 10px 10px ;
  ${media.medium`
    grid-template-columns: repeat(2, 1fr);
  `};
  ${media.small`
    display: flex;
    justify-content: center;
  `};
`;

export const Card = styled(motion.div)`
  min-width: 400px;
  height: 550px;
  background-color: #eeecec87;
  border-radius: 15px;

  ${media.small`
    min-width: 350px;
    height: 520px;
  `};
  ${media.xsmall`
    min-width: 340px;
    height: 480px;
  `};

  & {
  transition: background-color 0.3s ease-in-out;
  }

  &:hover {
    background-color: #eeececca;
  }

  cursor: pointer;
  .card-title {
    font-size: 40px;
    font-weight: 600;
    display: block;
    margin: 20px 0;
    ${media.small`
      font-size: 30px;
      margin: 15px 0;
    `};
    ${media.xsmall`
      font-size: 25px;
      margin: 10px 0;
    `};
  }
  .img {
    width: 400px;
    height: 230px;
    border-radius: 10px;
    margin: 5px 0 15px;
    ${media.medium`
      width: 380px;
      height: 210px;
    `};
    ${media.small`
      width: 320px;
      height: 180px;
    `};
    ${media.xsmall`
      width: 300px;
      height: 160px;
    `};
  }
  .discription {
    line-height: 30px;
    float: left;
    text-align: left;
    padding: 0 35px;
    font-family : 'noto sans';
    .sub-title {
      font-size: 18px;
      font-weight: 500;
      display: block;
      ${media.small`
        font-size: 16px;
      `};
      ${media.xsmall`
        font-size: 15px;
      `};
    }
    .skill {
      font-size: 13px;
      font-weight: 600;
      display: block;
      color: #440f73c2;
    }
    .disc {
      font-size: 13px;
      font-weight: 400;
      display: block;
      ${media.xsmall`
        font-size: 12px;
      `};
    }
  }
`;

export const LeftSlideButton = styled.div`
  position: absolute;
  left: 10px;
  z-index: 99;
  opacity: 0.7;

  &:hover {
    cursor: pointer;
    opacity: 1;
    transform: scale(1.1);
  }
`;

export const RightSlideButton = styled.div`
  position: absolute;
  right: 10px;
  z-index: 99;
  opacity: 0.7;

  &:hover {
    cursor: pointer;
    opacity: 1;
    transform: scale(1.1);
  }
`;



export const cardGroupVariants = {
  hidden: { y: 0, opacity: 0 },
  visible: { y: -100, opacity: 1, transition: { duration: 1.5 } },
};

export const rowVariants = {
  hidden: {
    x: "-0%", 
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    x: "0%", 
    opacity: 0,
    transition: { duration: 0.5 },
  },
};


export const cardVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    // scale: 1,
    // y: -10,
    transition: {
      delay: 0.1,
      duaration: 0.3,
      type: "tween",
    },
  },
};


export const projectModal = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background-color: #fff;
  z-index: 9;
`;
