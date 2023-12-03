import styled from "@emotion/styled";
import blackStone from "../../assets/blackStone.svg";
import whiteStone from "../../assets/whiteStone.svg";
import React, { useState } from "react";

/** css  */
const Button = styled.button`
  background-color: rgba(0, 99, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px black;
  border-radius: 0;
  margin: 0.5px;

  width: ${(props: { size: number }) => props.size}px;
  height: ${(props: { size: number }) => props.size}px;

  &:hover {
    border-color: red;
  }

  .stone {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
/** Props  */
/** Square 상태 종류 :
 * 크기  size
 * 좌표 값 x , y
 * 돌 : 흑돌 or 백돌 or None :  1| 2 | 0
 * 돌을 놓을 수 있는 자리 : Boolean
 *
 */
interface GothelloBoardSquareProps {
  size: number;
  x: number;
  y: number;
  stone: number;
}

const renderStone = (stone: number) => {
  switch (stone) {
    case 0:
      return null;
    case 1:
      return <img src={blackStone} alt="blackStone" />;
    case 2:
      return <img src={whiteStone} alt="whiteStone" />;
  }
};

const GothelloBoardSquare = ({
  size,
  x,
  y,
  stone,
}: GothelloBoardSquareProps) => {
  const id = x.toString() + "-" + y.toString();

  const [isCanPut, setIsCanPut] = useState(true);

  // 클릭시 , 해당 square은 둘 수 없다.
  const toggleIsCanPut = () => {
    if (isCanPut) {
      setIsCanPut((prevState) => !prevState);
    }
  };

  return (
    <div>
      <Button size={size} onClick={toggleIsCanPut} className={id}>
        <div className="stone">{renderStone(stone)}</div>
      </Button>
    </div>
  );
};

export default GothelloBoardSquare;
