import { Coordinate } from "../models/Coordinate";
import { DirX, DirY, Opposite } from "./Global";

export const ItCanPlaces = (
  board: number[][],
  x: number,
  y: number,
  currentStone: number
): boolean[][] => {
  const result: boolean[][] = Array.from({ length: 8 }, () =>
    Array(8).fill(false)
  );
  const visited = Array.from({ length: 8 }, () => Array(8).fill(false));
  //현재 좌표값 : x ,y  :매개변수
  /** 현재 돌의 값을 기준으로 탐색해야함
   *  둘 자리가 있으면(== 사이에 반대 값의 돌이 있을 경우) 해당자리 값 true로 변환
   *  result[][] = 현재 돌을 놓을 수 있는 자리들을 보여주는 matrix 이다.
   */
  // dx: Direction X  dy: Driection Y   / nx : Near X  ny: Near Y

  const stack: Coordinate[] = [];
  const currentCoord: Coordinate = { x: x, y: y };
  stack.push(currentCoord);

  const opposite = Opposite(currentStone);
  while (stack.length > 0) {
    const curr = stack.pop();
    if (curr === undefined) break;
    for (let i = 0; i < 8; i++) {
      const dx = DirX[i];
      const dy = DirY[i];

      let hasOpposite = false;

      let nx = curr.x + dx;
      let ny = curr.y + dy;

      // 기준점에서 한방향씩 while문 돌면서 찾는거임
      while (nx >= 0 && ny >= 0 && nx < 8 && ny < 8) {
        if (visited[ny][nx]) break;
        let temp: Coordinate;

        if (board[ny][nx] === 0) {
          if (hasOpposite) {
            // 0인데 오는길에 oppsite 있었음!
            result[ny][nx] = true; // 해당자리 true 표시
          }
          break;
        }

        if (board[ny][nx] === currentStone) {
          //같은 색이면 stack에 추가
          temp = { x: nx, y: ny };
          stack.push(temp);
          visited[ny][nx] = true;
          break;
        } else if (board[ny][nx] === opposite) {
          // 반대 색이면
          hasOpposite = true;
        }

        nx += dx;
        ny += dy;
      }
    }
  }

  return result;
};
