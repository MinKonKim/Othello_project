import React from "react";

interface CurrentPlayerProps {
  name: string;
}

const CurrentPlayer: React.FC<CurrentPlayerProps> = ({ name }) => {
  const currentUserName = name;
  return (
    <div>
      <h2>현재 플레이어: {`${currentUserName}`}</h2>
    </div>
  );
};

export default CurrentPlayer;
