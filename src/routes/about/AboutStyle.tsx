import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh; 
  /* text-align: center; */
  padding-top: 100px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 70px;
  font-family: 'montserrat';
  margin: 0 auto;
  text-align: center;
`;

export const Contents = styled.div`
  margin-top: 30px;
  height: 75vh;
  /* display: flex;
  align-items: center; */
`;


export const TopSection = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
  .item{
    height: 180px;
    font-family: 'dohyeon';
    position: relative;
    .text-wrapper{
      margin-top: 30px;
      position: relative;
      .large-text{
        font-size: 33px;
        /* font-weight: 500; */
        margin-top: 10px;
        font-family: 'dohyeon';
      }
      .small-text{
        margin: 5px 2px;
        font-size: 20px;
        color: #424242df;
      }
    }
    .icon{
      position: absolute;
      color: #ffffffd7;
      opacity: 0.3;
      margin-left: -40px;
    }
  }
`;

export const BottomSection = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
`;

export const LinkCardGroup = styled.div`
  display: flex;
  gap: 150px;
  margin-top: 50px;
`;
export const LinkCard = styled.div`
  width: 200px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #eeecec60;
  border-radius: 15px;
  & {
  transition: background-color 0.3s ease-in-out;
  }

  &:hover {
    background-color: #eeececca;
  }

  cursor: pointer;
  .git-icon{
    width: 40px;
    height: 40px;
  }
  .card-text{
    font-family: 'montserrat';
    font-weight: bold;
    font-size: 23px;
  }
`;