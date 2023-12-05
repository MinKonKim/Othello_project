import styled from "@emotion/styled";
import useBoardStore from "../../stores/useBoardStore";
import GothelloBoardSquare from "./GothelloBoardSquare";
import useStoneStore from "../../stores/useStoneStore";
import { ItCanPlaces } from "../../utils/CheckPlace";

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

/** 흑돌 : 1 백돌 :2 없음 : 0 */
const GothelloBoard: React.FC = () => {
  const { board } = useBoardStore();
  const { current } = useStoneStore();
  // 초기값 지정
  board[3][3] = 2;
  board[3][4] = 1;
  board[4][4] = 2;
  board[4][3] = 1;

  // const itCanPlaces = ItCanPlaces(board, x, y, current);

  return (
    <BackBoard>
      <BoardContainer>
        {board.map((row, rowIndex) =>
          row.map((value, colIndex) => (
            // 버튼 크기, 좌표값, 현재 돌  넘겨준다.
            <GothelloBoardSquare
              size={SQUARE_SIZE}
              x={colIndex}
              y={rowIndex}
              stone={value === 0 ? current : value}
              isTarget={value === 5 ? true : false}
            />
          ))
        )}
      </BoardContainer>
    </BackBoard>
  );
};

export default GothelloBoard;
