import { motion } from "framer-motion";
import styled from "styled-components";
import media from "../../MediaQuery.tsx";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 1;

`;

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderItems = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const HeaderItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0 50px;
  font-size: 20px;
  font-family: 'Exo2';
  ${media.medium`
    margin: 0 40px;
  `};
  ${media.small`
    margin: 0 20px;
    font-size: 18px;
  `};
  ${media.xsmall`
    margin: 0 12px;
    font-size: 17px;
  `};
`;


export const Menu = styled.span`
  z-index: 1;
  margin-left: 10px;
  cursor: pointer;
`;

export const MotionDot = styled(motion.div)`
  width: 35px;
  height: 35px;
  background-color: #ffc0cba1;
  border-radius: 100%;
  position: absolute;
  ${media.small`
    width: 30px;
    height: 30px;
  `};
`;
