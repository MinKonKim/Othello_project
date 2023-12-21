import React from "react";
import Background from "../components/background";
import StartButton from "./components/StartButton";
import BackGroundEffet from "./components/BackGroundEffet";
import styled from "@emotion/styled";
import Chatbox from "../components/Chatbox";
import SettingMenu from "./components/SettingMenu";

const LeftSide = styled.div`
  position: fixed;
  left: 25%;
`;

const ButtonWrapper = styled.div`
  bottom: 100vh;
  transform: translate(-50%);
`;

const StartPage: React.FC = () => {
  return (
    <div>
      <Background />
      <BackGroundEffet />
      <LeftSide>
        <h1>OTHELLO~~~</h1>
        <SettingMenu />
        <ButtonWrapper>
          <StartButton />
        </ButtonWrapper>
      </LeftSide>
    </div>
  );
};

export default StartPage;
