import styled from "@emotion/styled";
import blackStone from "../../assets/blackStone.svg";
import whiteStone from "../../assets/whiteStone.svg";
import target from "../../assets/target.svg";
import React, { useState } from "react";
import useBoardStore from "../../stores/useBoardStore";
import useStoneStore from "../../stores/useStoneStore";

/** css  */
const Button = styled.button`
  background-color: rgba(0, 99, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px black;
  border-radius: 0;
  margin: 0.5px;

  width: ${(props: { size: string }) => props.size};
  height: ${(props: { size: string }) => props.size};

  &:hover {
    border-color: red;
  }

  .stone {
    width: 1rem;
    height: 1rem;
  }
`;
/** Props  */
/** Square 상태 종류 :
 * 크기  size
 * 좌표 값 x , y
 * 돌 : 흑돌 or 백돌 or None :  1| 2 | 0
 *
 */
interface GothelloBoardSquareProps {
  size: string;
  x: number;
  y: number;
  stone: number;
  isTarget: boolean;
}

const GothelloBoardSquare = ({
  size,
  x,
  y,
  stone,
  isTarget,
}: GothelloBoardSquareProps) => {
  const id = (x + 1).toString() + "-" + (y + 1).toString();

  const [isCanPut, setIsCanPut] = useState(true); // 여기가 돌을 놓을 수 있는 자리인가? 에 관한 State

  const { board } = useBoardStore();
  const { setCurrent } = useStoneStore();

  // 초기상태
  if ((id === "4-5" || id === "5-4") && isCanPut) {
    setIsCanPut((prevState) => !prevState);
  } else if ((id === "4-4" || id === "5-5") && isCanPut) {
    setIsCanPut((prevState) => !prevState);
  }

  // is can put State 변경
  const putStone = () => {
    if (stone !== 0 && isTarget && board[y][x] !== undefined) {
      board[y][x] = stone;

      isTarget = !isTarget;

      if (stone === 1) setCurrent(2);
      else setCurrent(1);
    }
  };
  // 돌 이미지 출력
  const renderStone = () => {
    console.log("돌 출력");
    switch (stone) {
      case 0:
        return null;
      case 1:
        return <img src={blackStone} alt="blackStone" />;
      case 2:
        return <img src={whiteStone} alt="whiteStone" />;
    }
  };
  // 타겟 출력
  const renderTarget = () => {
    return <img src={target} alt="target" />;
  };

  return (
    <Button size={size} onClick={putStone} className={id}>
      {isTarget ? renderTarget() : renderStone()}
    </Button>
  );
};

export default GothelloBoardSquare;
