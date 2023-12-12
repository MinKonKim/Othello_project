import React from "react";
import useStoneStore from "../../stores/useStoneStore";

const CurrentPlayer: React.FC = () => {
  const { current } = useStoneStore();
  let name = current === 1 ? "Black" : "White";
  return (
    <div>
      <h2> Now Playing: {`${name}`}</h2>
    </div>
  );
};

export default CurrentPlayer;
