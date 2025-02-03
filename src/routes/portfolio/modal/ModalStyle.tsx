import { motion } from "framer-motion";
import styled from "styled-components";
import media from "../../../MediaQuery.tsx";

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

export const ModalBox = styled(motion.div)`
  background: #ecebeb;
  padding: 10px 0px;
  border-radius: 10px;
  width: 40%; 
  height: 75%;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  ${media.medium`
    width: 80%; 
  `};
  ${media.small`
    width: 100%; 
  `};
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
export const ModalTitle = styled.h2`
  margin-bottom: 10px;
  margin: 0 ;
  font-size: 3rem;
  ${media.medium`
    font-size: 2.5rem;
  `};
  ${media.small`
    font-size: 2rem;
  `};
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


export const ModalContent = styled.div`
  width: 100%;
  height: 90%;
  text-align: left;
  overflow-y: auto;
  font-family: 'noto sans';

  &::-webkit-scrollbar {
    width: 8px; 
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(180, 176, 180); 
    border-radius: 10px; 
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgb(146, 145, 146);  /* 마우스 올렸을 때 색상 */
  }
  &::-webkit-scrollbar-track {
    background: rgba(169, 169, 169, 0.2); /* 스크롤바 트랙 색상 */
    border-radius: 10px; 
  }

  .content{
    padding: 20px;
    .wrapper{
      margin-bottom: 10px;
      span{
        display: inline-block;
        line-height: 30px;
      }
    }
    .sub-title{
      font-size: 18px;
      font-weight: 600;
      margin-left: -5px;
      margin-top: 20px;
      color: #7b477b;
      ${media.small`
        font-size: 16px;
      `};
    }
    .link-wrapper{
      background-color: #a9a9a91e;
      padding: 10px;
      border-radius: 10px;
      font-size: 16px;
      ${media.medium`
        font-size: 14px;
      `};
      ${media.small`
        font-size: 12px;
      `};
      .git-icon{
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
      .github{
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        flex-wrap: wrap;
      }
      .link{
        margin-left: 5px;
        border-bottom: 1px solid;
        font-weight: 600;
        cursor: pointer;
      }
      .login-info{
        font-size: 13px;
        margin: 5px 5px 0 5px;
        color: #595858;
        ${media.small`
          font-size: 10px;
        `};
        ${media.xsmall`
          font-size: 8.5px;
        `};
      }
    }
    .outline-wrapper{
      font-size: 15px;
      line-height: 30px;
      margin-left: 5px;
      ${media.small`
        font-size: 13px;
      `};
      ${media.xsmall`
        font-size: 12px;
      `};
    }
    .disc-wrapper{
      font-size: 15px;
      line-height: 30px;
      margin:0 5px;
      color: #595858;
      ${media.small`
        font-size: 13px;
      `};
      ${media.xsmall`
        font-size: 12px;
      `};
    }
    .detail-contents{
      margin-bottom: 5px;
      margin-left: 0px;
    }
    .dev-detail-wrapper{
      margin:0 5px;
      line-height: 30px;
      .dev-detail-title{
        font-weight: bold;
        ${media.small`
          font-size: 15px;
        `};
        ${media.xsmall`
          font-size: 13px;
        `};
      }
      .dev-detail-contents {
        padding-left: 30px;
        margin: 0;
        ${media.small`
          font-size: 13px;
        `};
        ${media.xsmall`
          font-size: 12px;
        `};
      }
    }
    .review-wrapper{
      margin: 10px 5px 0 5px;
      line-height: 30px;
      ${media.small`
        font-size: 13px;
      `};
      ${media.xsmall`
        font-size: 12px;
      `};
    }

  }
`;
