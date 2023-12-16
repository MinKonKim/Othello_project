import styled from "@emotion/styled";

import useStoneStore from "../../stores/useStoneStore";
import uselatestPoint from "../../stores/uselatestPoint";

import { Flip } from "../../utils/Flip";
import { Opposite } from "../../utils/Global";

import GothelloBoardSquare from "./GothelloBoardSquare";
import { useEffect } from "react";

//#region CSS
const BackBoard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40rem;
  height: 40rem;
  background-color: black;
  z-index: -50;
  border-radius: 10px;
`;

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 0.2rem;
`;

const SQUARE_SIZE = "4.5rem";
//#endregion
interface GothelloBoardProps {
  board: number[][];
  targets: boolean[][];
}

/** 흑돌 : 1 백돌 :2 없음 : 0 */
const GothelloBoard = ({ board, targets }: GothelloBoardProps) => {
  const { current } = useStoneStore();
  const { latestX, latestY } = uselatestPoint();

  const opposite = Opposite(current);

  useEffect(() => {
    // 뒤집힐 돌의 좌표들 찾기 + 해당 좌표의 숫자 변경
    let flipBoard = Flip(board, latestX, latestY, opposite);
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (flipBoard[i][j]) {
          board[i][j] = opposite;
        }
      }
    }
  }, [latestX, latestY, board]);

  return (
    <div>
      <BackBoard>
        <BoardContainer>
          {board.map((row, rowIndex) =>
            row.map((value, colIndex) => (
              // 버튼 크기, 좌표값, 현재 돌  넘겨준다.
              <GothelloBoardSquare
                key={`${rowIndex}-${colIndex}`}
                size={SQUARE_SIZE}
                x={colIndex}
                y={rowIndex}
                stone={value === 0 ? current : value}
                isTarget={targets[rowIndex][colIndex]}
              />
            ))
          )}
        </BoardContainer>
      </BackBoard>
    </div>
  );
};

export default GothelloBoard;
