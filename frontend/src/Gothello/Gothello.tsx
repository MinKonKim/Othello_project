import React from "react";
import Background from "../components/background";
import GothelloBoard from "./components/GothelloBoard";

const Gothello: React.FC = () => {
  return (
    <div>
      <Background />
      <GothelloBoard />
    </div>
  );
};

export default Gothello;
