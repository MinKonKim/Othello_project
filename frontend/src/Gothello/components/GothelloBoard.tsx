import styled from "@emotion/styled";
import useBoardStore from "../../stores/gameBoardStore";
import GothelloBoardSquare from "./GothelloBoardSquare";
import useStoneStore from "../../stores/Stone";

// const BoardContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(8, 1fr);
//   grid-template-rows: repeat(8, 1fr);
//   gap: 2px;
// `;

const SQUARE_SIZE = 40;

// 배열/ 행 / 열 / 값
// function updateBoardValue(
//   board: number[][],
//   rowIndex: number,
//   columnIndex: number,
//   newValue: number
// ) {
//   const newBoard = board.map((row, rIndex) => {
//     if (rIndex == rowIndex) {
//       return row.map((cell, cIndex) => {
//         if (cIndex == columnIndex) {
//           return newValue;
//         }
//         return cell;
//       });
//     }
//     return row;
//   });
//   return { board: newBoard };
// }

/** 흑돌 : 1 백돌 :2 없음 : 0 */
const GothelloBoard: React.FC = () => {
  const { board } = useBoardStore();
  const { current } = useStoneStore();

  const UpdateBoard = (x: number, y: number, value: number) => {
    if (board[y][x] === 0 && board[y] !== undefined) {
      board[y][x] == value;
    }
  };
  return (
    <table>
      <tbody>
        {board.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>
                <GothelloBoardSquare
                  size={SQUARE_SIZE}
                  x={cellIndex}
                  y={rowIndex}
                  stone={board[rowIndex][cellIndex]}
                  // isCanPut={cell > 0 ? false : true}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GothelloBoard;
