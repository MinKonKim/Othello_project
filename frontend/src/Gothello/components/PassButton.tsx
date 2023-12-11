import React from "react";
import styled from "@emotion/styled";

interface PassButtonProps {
  isVisible: boolean;
  onClose: () => void;
}

const ButtonStyle = styled.button<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
`;
const PassButton: React.FC<PassButtonProps> = ({ isVisible, onClose }) => {
  return (
    <ButtonStyle isVisible={isVisible} onClick={onClose}>
      {" "}
      PASS
    </ButtonStyle>
  );
};

export default PassButton;
