import React from "react";
import Cell from "./Cell";
import styled from "@emotion/styled";
import { useBoardStore } from "../stores/gameBoardStore";

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 2px;
`;

/** 흑돌 : 1 백돌 :2 없음 : 0 */
const Board: React.FC = ({}) => {
  const gameBoard = useBoardStore((state) => state.gameBoard);

  const renderBoard = () => {
    /**초기 게임보드 값 설정 */
    for (let i = 0; i < 64; i++) {
      if (i === 27 || i === 36) {
        gameBoard.push(<Cell keyId={i} value={2} />);
      } else if (i === 28 || i === 35) {
        gameBoard.push(<Cell keyId={i} value={1} />);
      } else {
        gameBoard.push(<Cell keyId={i} value={0} />);
      }
    }

    return gameBoard;
  };

  return (
    // 8 * 8 베열 만들기
    <BoardContainer>{renderBoard()}</BoardContainer>
  );
};

export default Board;
