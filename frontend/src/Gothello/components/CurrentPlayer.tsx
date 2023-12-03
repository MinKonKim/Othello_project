import React from "react";
import useStoneStore from "../../stores/Stone";

const CurrentPlayer: React.FC = () => {
  const { current } = useStoneStore();
  let name = current === 1 ? "streamer" : "viewer";
  return (
    <div>
      <h2>현재 플레이어: {`${name}`}</h2>
    </div>
  );
};

export default CurrentPlayer;
