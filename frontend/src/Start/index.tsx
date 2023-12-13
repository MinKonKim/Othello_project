import React from "react";
import Background from "../components/background";
import StartButton from "./components/StartButton";
import BackGroundEffet from "./components/BackGroundEffet";
const StartPage: React.FC = () => {
  return (
    <div>
      <h1>OTHELLO~~~</h1>
      <Background />
      <BackGroundEffet />
      <StartButton />
    </div>
  );
};

export default StartPage;
