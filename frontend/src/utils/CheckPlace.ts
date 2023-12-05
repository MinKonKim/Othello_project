import { DirX, DirY } from "./GlobalDirection";

export interface Coordinate {
  x: number;
  y: number;
}

export const ItCanPlaces = (
  board: number[][],
  x: number,
  y: number,
  currentStone: number
): Coordinate[] => {
  const result: Coordinate[] = [];
  const visited = Array.from({ length: 8 }, () => Array(8).fill(false));
  //현재 좌표값 : x ,y  :매개변수
  /** 현재 돌의 값을 기준으로 탐색해야함
   *  둘 자리가 있으면(== 사이에 반대 값의 돌이 있을 경우) 해당 자리의 board 값을 5로 만들자
   *  or 좌표값을 추출해보자
   */
  // dx: Direction X  dy: Driection Y   / nx : Near X  ny: Near Y

  let stack: Coordinate[] = [];
  let currentCoord: Coordinate = { x: x, y: y };
  stack.push(currentCoord);

  const opposite = currentStone == 1 ? 2 : 1;
  while (stack.length > 0) {
    let curr = stack.pop();
    if (curr === undefined) break;
    for (let i = 0; i < 8; i++) {
      let dx = DirX[i];
      let dy = DirY[i];

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
            temp = { x: nx, y: ny };
            result.push(temp);
          }
          break;
        } else if (board[ny][nx] === currentStone) {
          //같은 색이면 stack에 추가
          temp = { x: nx, y: ny };
          stack.push(temp);
        } else if (board[ny][nx] === opposite) {
          // 반대편 색이면
          hasOpposite = true;
        }
        visited[ny][nx] = true; //방문 체크

        nx += dx;
        ny += dy;
      }
    }
  }

  return result;
};
