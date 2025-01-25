import React, { useEffect } from "react";
import {
  CloseButton,
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

  console.log(item);

  return (
    <ModalContainer onClick={onClose}>
      <ModalContent
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
      </ModalContent>
    </ModalContainer>
  );
}
