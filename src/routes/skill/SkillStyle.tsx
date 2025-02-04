import { motion } from "framer-motion";
import styled from "styled-components";
import media from "../../MediaQuery.tsx";

export const SkillContainer = styled.div`
  min-height: 100vh;
  text-align: center;
  padding-top: 60px;
  box-sizing: border-box;
`;

export const SkillTitle = styled.h1`
  font-size: 70px;
  font-family: "montserrat";
  width: 100%;
  margin-bottom: 50px;
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

export const SkillContents = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  div {
    width: 100%;
    align-items: center;
  }
  ${media.small`
    margin-top: -25px;
    flex-direction: column;
  `};
`;

export const StyledSkillItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 100px;
  height: 70px;

  ${media.small`
    height: 40px;
    margin-bottom: 10px;
  `};

  ${media.xsmall`
    height: 25px;
    margin-bottom: 10px;
  `};

  &:hover .flip-container {
    cursor: pointer;
  }

  .flip-container {
    width: 150px;
    height: 100%;
    perspective: 1000px;
  }

  .flipper {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.4s ;
  }

  .flip-container.flipped .flipper {
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
    
    font-weight: bold;
    font-size: 20px;
    font-family: "montserrat";
    ${media.small`
      font-size: 15px;
    `};
    ${media.xsmall`
      font-size: 12px;
    `};
  }

  .front,
  .back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .back {
    transform: rotateX(180deg);
  }

  .skill-percentage-wrapper {
    width: 100%;
    background-color: #eeecec87;
    border-radius: 10px;
    overflow: hidden;
    height: 30px;
    margin-right: 30px;

    ${media.small`
      height: 15px;
    `};
    ${media.xsmall`
      height: 12px;
    `};
  }
`;

// export const StyledSkillItem = styled.div<{ isActive: boolean }>`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 40px;
//   width: 100px;
//   height: 70px;

//   ${media.small`
//     height: 40px;
//     margin-bottom: 10px;
//   `};

//   ${media.xsmall`
//     height: 25px;
//     margin-bottom: 10px;
//   `};

//   .flip-container {
//     width: 150px;
//     height: 100%;
//     position: relative;
//     transition: transform 0.6s;
//     transform-style: preserve-3d;
//     ${({ isActive }) => isActive && "transform: rotateX(180deg);"}
//   }

//   &:hover .flip-container {
//     transform: rotateX(180deg);
//     cursor: pointer;
//   }

//   .skill-img,
//   .skill-name {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     backface-visibility: hidden;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   .skill-name {
//     transform: rotateX(180deg);
//     font-weight: bold;
//     font-size: 20px;
//     font-family: "montserrat";
//     ${media.small`
//       font-size: 15px;
//     `};
//     ${media.xsmall`
//       font-size: 12px;
//     `};
//   }

//   .skill-percentage-wrapper {
//     width: 100%;
//     /* border: 1px solid #eeecec87; */
//     background-color: #eeecec87;
//     border-radius: 10px;
//     overflow: hidden;
//     height: 30px;
//     margin-right: 30px;
//     ${media.small`
//       height: 15px;
//     `};
//     ${media.xsmall`
//       height: 12px;
//     `};
//   }

// `;

export const SkillPercentage = styled(motion.div)`
  height: 100%;
  background-image: linear-gradient(to right, #ec77ab 0%, #7873f5 100%);
  opacity: 0.9;
  transition: width 0.8s ease-in-out;
`;

export const SkillUtilization = styled(motion.div)`
  width: 75%;
  height: 180px;
  padding: 10px;
  margin: 0 auto;
  border: 2px dashed #959292eb;
  border-radius: 20px;
  overflow-y: auto;
  display: flex;
  align-items: flex-start; // 변경: 상단부터 정렬되도록 설정
  flex-direction: column;
  ${media.small`
    margin-top: 30px;
    padding: 5px;
  `};
  ${media.xsmall`
    margin-top: 10px;
  `};
  ul {
    text-align: left;
    line-height: 35px;
    font-size: 20px;
    font-weight: bold;
    font-family: "noto sans";
    margin: 10px;
    li {
      margin-left: -10px;
    }
    ${media.small`
      margin : 0;
      font-size: 13px;
      line-height: 30px;
    `};
    ${media.xsmall`
      font-size: 10px;
    `};
  }
  .info {
    margin: 70px auto;
    font-size: 20px;
    font-weight: bold;
    font-family: "noto sans";
    animation: bounce 1s ease infinite;
    color: #313131;

    ${media.small`
      font-size: 18px;
    `};
    ${media.xsmall`
      font-size: 15px;
    `};

    @keyframes bounce {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }
  }
`;
