import styled from "@emotion/styled";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalWrapper = styled.div<{ isOpen: boolean }>`
  /* 모달 스타일링 */
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #ccc;
  padding: 20px;
`;

const ModalCloseButton = styled.span`
  /* 모달 닫기 버튼 스타일링 */
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapper isOpen={isOpen} className="modal">
      <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
      <div className="modal-content">
        <p>결과: ...</p>
        {/* 결과 내용을 여기에 표시 */}
      </div>
    </ModalWrapper>
  );
};

export default Modal;
