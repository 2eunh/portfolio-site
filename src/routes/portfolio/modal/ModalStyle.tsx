import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const ModalContent = styled(motion.div)`
  background: #dfdddd;
  padding: 10px 20px;
  border-radius: 10px;
  width: 65%; 
  height: 75%;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ModalTitle = styled.h2`
  margin-bottom: 10px;
  margin: 0 ;
  font-size: 3rem;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  border-radius: 100%;
  margin-right: -15px;
  padding: 0px;

  .close-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease-in-out; 

    &:hover {
      transform: rotate(90deg); 
    }
  }
`;
