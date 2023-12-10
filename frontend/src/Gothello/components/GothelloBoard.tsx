import styled from "@emotion/styled";

import useBoardStore from "../../stores/useBoardStore";
import useStoneStore from "../../stores/useStoneStore";
import uselatestPoint from "../../stores/uselatestPoint";

import { useState } from "react";
import { Flip } from "../../utils/Flip";
import { ItCanPlaces } from "../../utils/CheckPlace";
import { FindStoneIdx, Opposite } from "../../utils/Global";

import PassButton from "./PassButton";
import Modal from "../../components/Modal";
import GothelloBoardSquare from "./GothelloBoardSquare";

const BackBoard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 30rem;
  background-color: black;
  z-index: -50;
`;

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 2px;
`;

const SQUARE_SIZE = "3.5rem";

interface GothelloBoardProps {
  board: number[][];
}

/** 흑돌 : 1 백돌 :2 없음 : 0 */
const GothelloBoard: React.FC = () => {
  const { board } = useBoardStore();
  const { current, stonecount } = useStoneStore();
  const { latestX, latestY } = uselatestPoint();

  const [isCanMove, setisCanMove] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const opposite = Opposite(current);

  // 뒤집힐 돌의 좌표들 찾기 + 해당 좌표의 숫자 변경
  let flipBoard = Flip(board, latestX, latestY, opposite);
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (flipBoard[i][j]) {
        board[i][j] = opposite;
      }
    }
  }

  // 타겟서칭을 할 돌 기준 잡기
  const keystone = FindStoneIdx(board, current);
  let X = keystone.x;
  let Y = keystone.y;

  // 타켓 표시를 위한 좌표 찾기
  const targets = ItCanPlaces(board, X, Y, current);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (stonecount == 64) {
    setIsModalOpen(true);
  }

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
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
      <PassButton isVisible={isCanMove} />
    </div>
  );
};

export default GothelloBoard;
