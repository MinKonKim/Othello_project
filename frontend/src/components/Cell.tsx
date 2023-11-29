import React, { useState } from "react";
import styled from "@emotion/styled";

interface CellProps {
  keyId: string;
}

const Button = styled.button<{ isBlue: boolean }>`
  background-color: ${(props) => (props.isBlue ? "blue" : "red")};
  width: 56px;
  height: 56px;
  border: 0.5px solid #ffd700;
  border-radius: 0;

  &:hover {
    background-color: ${(props) => (props.isBlue ? "green" : "yellow")};
  }
`;

const Cell: React.FC<CellProps> = ({ keyId }) => {
  const [isBlue, setIsBlue] = useState(false);

  const handleClick = () => {
    setIsBlue((prevState) => !prevState);
  };

  return (
    <Button key={keyId} isBlue={isBlue} onClick={handleClick}>
      {/* 버튼 내용 */}
    </Button>
  );
};

export default Cell;
