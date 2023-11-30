import React, { useState } from "react";
import styled from "@emotion/styled";
import blackStone from "../assets/blackStone.svg";
import whiteStone from "../assets/whiteStone.svg";

interface CellProps {
  keyId: number;
  value: any;
}

const Button = styled.button`
  background-color: rgba(0, 99, 0, 0.5);
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 0;
  margin: 2px;

  &:hover {
    border-color: #00ffaa;
  }

  img {
    width: 40px;
    height: 40px;
    margin-right: 5vw;
  }
`;

const getStone = (value: number) => {
  switch (value) {
    case 0:
      return null;
    case 1:
      return <img src={blackStone} />;
    case 2:
      return <img src={whiteStone} />;
  }
};

const Cell: React.FC<CellProps> = ({ keyId, value }) => {
  const [isBlackStone, setIsBlackStone] = useState(false);

  const handleClick = () => {
    setIsBlackStone((prevState) => !prevState);
  };

  return (
    <Button key={keyId} onClick={handleClick}>
      {getStone(value)}
    </Button>
  );
};

export default Cell;
