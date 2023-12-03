import React from "react";
import Background from "../components/background";
import GothelloBoard from "./components/GothelloBoard";
import CurrentPlayer from "./components/CurrentPlayer";
import useStoneStore from "../stores/Stone";

const Gothello: React.FC = () => {
  return (
    <>
      <div>
        {/* 현재 플레이어 보여주기  */}
        <CurrentPlayer />
      </div>
      <div>
        <Background />
        <GothelloBoard />
      </div>
    </>
  );
};

export default Gothello;
