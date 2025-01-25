import { motion } from "framer-motion";
import styled from "styled-components";

export const SkillContainer = styled.div`
  min-height: 100vh; 
  text-align: center;
  padding-top: 60px;
  box-sizing: border-box;
`;

export const SkillTitle = styled.h1`
  font-size: 70px;
  font-family: 'montserrat';
  width: 100%;
  margin-bottom: 70px;
`;


export const SkillContents = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  div{
    width: 100%;
    align-items: center;
  }
`;

export const StyledSkillItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 100px;
  height: 70px;

  .flip-container {
    width: 150px;
    height: 100%;
    position: relative;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  &:hover .flip-container {
    transform: rotateX(180deg);
  }

  .skill-img,
  .skill-name {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .skill-name {
    transform: rotateX(180deg);
    font-weight: bold;
    font-size: 20px;
    font-family: "montserrat";
  }

  .skill-percentage-wrapper {
    width: 100%;
    /* border: 1px solid #eeecec87; */
    background-color: #eeecec87;
    border-radius: 10px;
    overflow: hidden;
    height: 30px;
    margin-right: 30px;
  }

`;

export const SkillPercentage = styled(motion.div)`
    height: 100%;
    background-image: linear-gradient(to right, #ec77ab 0%, #7873f5 100%);
    opacity: 0.9;
    transition: width 0.8s ease-in-out;
`;