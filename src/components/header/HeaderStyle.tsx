import { motion } from "framer-motion";
import styled from "styled-components";
import media from "../../MediaQuery.tsx";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 6rem; 
  position: fixed;
  z-index: 1;
  transition: background-color 0.3s ease-in-out;


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
  margin: clamp(0.5rem, 3vw, 3rem); /* 자동 조절 */
  font-size: clamp(1rem, 2vw, 1.25rem); 
  font-family: 'Exo2';

  ${media.small`
    margin: 0 1.5rem;
    font-size: 1.125rem;
  `};
  ${media.xsmall`
    margin: 0 1rem;
    font-size: 1rem;
  `};
`;

export const Menu = styled.span`
  z-index: 1;
  margin-left: 0.625rem; 
  cursor: pointer;
`;

export const MotionDot = styled(motion.div)`
  width: clamp(1.5rem, 3vw, 2.5rem); 
  height: clamp(1.5rem, 3vw, 2.5rem);
  background-color: #ffc0cba1;
  border-radius: 100%;
  position: absolute;
`;
