import styled from "@emotion/styled";
import blackStone from "../../assets/blackStone.svg";
import whiteStone from "../../assets/whiteStone.svg";
import target from "../../assets/target.svg";
import { useState } from "react";
import useBoardStore from "../../stores/useBoardStore";
import useStoneStore from "../../stores/useStoneStore";
import uselatestPoint from "./../../stores/uselatestPoint";

//#region CSS
const TargetContainer = styled.div`
  margin-top: 3.3px;
  position: relative;
  display: inline-block;
`;

const TextOverImage = styled.div`
  position: absolute;
  top: 47.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 22px;
  font-style: italic;
  font-weight: 680;
  color: "#222423";
`;

const Button = styled.button`
  background-color: rgba(0, 99, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px black;
  border-radius: 2px;
  margin: 0.5px;

  width: ${(props: { size: string }) => props.size};
  height: ${(props: { size: string }) => props.size};

  &:hover {
    border-color: red;
  }

  .stone {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
//#endregion
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
  const { board, setBoard } = useBoardStore();
  const { stonecount, setCurrent, setStoneCount } = useStoneStore();
  const { setlatestX, setlatestY } = uselatestPoint();

  // 초기상태
  if ((id === "4-5" || id === "5-4") && isCanPut) {
    setIsCanPut(false);
  } else if ((id === "4-4" || id === "5-5") && isCanPut) {
    setIsCanPut(false);
  }

  // is can put State 변경
  const putStone = () => {
    if (stone !== 0 && isCanPut && board[y][x] !== undefined) {
      setBoard((board) => {
        board[y][x] = stone;
        return board;
      });
      setIsCanPut((prev) => !prev);

      //최근 클릭한 좌표 업데이트
      setlatestX(x);
      setlatestY(y);
      setStoneCount(stonecount + 1);

      //순서 변경
      if (stone === 1) setCurrent(2);
      else setCurrent(1);
    }
  };
  // 돌 이미지 출력
  const renderStone = () => {
    if (isCanPut) return;

    switch (stone) {
      case 0:
        return null;
      case 1:
        return (
          <img src={blackStone} width="60rem" height="60rem" alt="blackStone" />
        );
      case 2:
        return (
          <img src={whiteStone} width="60rem" height="60rem" alt="whiteStone" />
        );
    }
  };
  // 타겟 출력
  const renderTarget = () => {
    return (
      <TargetContainer>
        <img src={target} alt="target" width="70rem" height="70rem" />
        <TextOverImage>{id}</TextOverImage>
      </TargetContainer>
    );
  };

  const Render = () => {
    if (isTarget) {
      return (
        <Button size={size} onClick={putStone} className={id}>
          {renderTarget()}
        </Button>
      );
    } else {
      return (
        <Button size={size} className={id}>
          {renderStone()}
        </Button>
      );
    }
  };

  return <div>{Render()}</div>;
};

export default GothelloBoardSquare;
