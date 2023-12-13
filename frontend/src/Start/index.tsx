import React from "react";
import Background from "../components/background";
import { Link } from "react-router-dom";
import StartButton from "./components/StartButton";
import BackGroundEffet from "./components/BackGroundEffet";
const StartPage: React.FC = () => {
  return (
    <div>
      <h1>OTHELLO~~~</h1>
      <Background />
      <Link to="/game">
        <BackGroundEffet />
        <StartButton />
      </Link>
    </div>
  );
};

export default StartPage;
