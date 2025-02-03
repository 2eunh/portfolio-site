import React, { useEffect } from "react";
import {
  CloseButton,
  ModalBox,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalTitle,
} from "./ModalStyle.tsx";
import { IoIosClose } from "react-icons/io";

export default function Modal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const onClickLink= (link : string) => {
    window.open(`${link}`);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation(); // 모달 내부에서만 스크롤 이벤트가 동작하도록
    };
  
    const modalRef = document.getElementById("modal-content"); // 모달 컨텐츠 영역
    if (modalRef) {
      modalRef.addEventListener("wheel", handleWheel);
    }
  
    return () => {
      if (modalRef) {
        modalRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);
  

  return (
    <ModalContainer onClick={onClose}>
      <ModalBox
        onClick={(e) => e.stopPropagation()}
        layoutId={`${item.id}`}
        key={`${item.id}`}
      >
        <ModalHeader>
          <ModalTitle>{item.title}</ModalTitle>
          <CloseButton onClick={onClose}>
            <IoIosClose size="60" className="close-btn" />
          </CloseButton>
        </ModalHeader>
        <ModalContent id="modal-content">
          <div className="content">
            <div className="link-wrapper wrapper">
              <div className="github">
                <img
                  src="./img/skill/Github-Dark.svg"
                  alt="git-icon"
                  className="git-icon"
                />
                깃허브 :<span className="link" onClick={() => onClickLink(item.detail.gitHub )}>{item.detail.gitHub}</span>
              </div>
              {item.detail.site ? (
                <div className="site">
                  🔗 사이트 :<span className="link" onClick={() => onClickLink(item.detail.site )}>{item.detail.site}</span>
                </div>
              ) : (
                <></>
              )}
              {item.detail.siteLoginInfo ? (
                <span className="login-info">{item.detail.siteLoginInfo}</span>
              ) : (
                <></>
              )}
            </div>
            <div className="outline-wrapper wrapper">
              <div className="sub-title">📝프로젝트 개요</div>
              <div>기간 : {item.detail.outline.period} / 인원 : {item.detail.outline.developers}</div>
              {item.detail.outline?.devEnvironment ? (
                <>
                  <div className="dev-env">Front-End : {item.detail.outline.devEnvironment.fe}</div>
                  <div className="dev-env">Back-End : {item.detail.outline.devEnvironment.be}</div>
                </>
              ) : (
                <><div className="dev-env">개발환경 : {item.skill}</div></>
              )}
            </div>
            <div className="disc-wrapper wrapper">
              <div className="disc">설명 : {item.disc}</div>
            </div>
            <div className="sub-title detail-contents ">👩‍💻개발 내용</div>
            {item.detail.devDetail.map((el, index) => (
              <div className="dev-detail-wrapper wrapper" key={index}>
                <div className="dev-detail-title">{el.subTitle}</div>
                <ul className="dev-detail-contents">
                  {el.subContents.map((content, idx) => (
                    <li key={idx}>{content}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="review-wrapper">
              <div className="sub-title">✨Review</div>
              <div className="review">{item.review}</div>
              {item.review2 ? (
                <div className="review">{item.review2}</div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </ModalContent>
      </ModalBox>
    </ModalContainer>
  );
}
