import React from "react";
import styled from "@emotion/styled";

interface PassButtonProps {
  isVisible: boolean;
}

const ButtonStyle = styled.button<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
`;
const PassButton: React.FC<PassButtonProps> = ({ isVisible }) => {
  return <ButtonStyle isVisible={isVisible}> PASS</ButtonStyle>;
};

export default PassButton;
