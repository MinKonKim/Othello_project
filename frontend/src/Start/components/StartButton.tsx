import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
const color = "#e3c39a";
//#region  CSS

const FifthButton = styled.button`
  border-color: ${color};
  border-radius: 5px;
  color: ${color};
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 150ms ease-in-out;
  width: 30rem;
  height: 5rem;
  font-size: 20px;

  &:after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: ${color};
    z-index: -1;
    transition: width 150ms ease-in-out;
  }

  &:hover {
    color: #fff;
    &:after {
      width: 110%;
    }
  }
`;
//#endregion

const StartButton: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/game", { replace: true });
    window.location.reload();
  };

  // const handleDevMode = () => {
  //   navigate("/game/dev", { replace: true });
  //   window.location.reload();
  // };

  return (
    <div>
      <FifthButton onClick={handleButtonClick}>StartButton</FifthButton>;
      {/* <FifthButton onClick={handleDevMode}>DevMode</FifthButton> */}
    </div>
  );
};

export default StartButton;
