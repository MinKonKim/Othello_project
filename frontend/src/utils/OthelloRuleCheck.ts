import { Coordinate } from "./CheckPlace";
import { DirX, DirY, Opposite } from "./Global";

export const OthelloRuleCheck = (
  board: number[][],
  x: number,
  y: number,
  current: number
): boolean[][] => {
  const result: boolean[][] = Array.from({ length: 8 }, () =>
    Array(8).fill(false)
  );
  const opposite = Opposite(current);

  for (let i = 0; i < 8; i++) {
    let dx = DirX[i];
    let dy = DirY[i];

    let nx = x + dx;
    let ny = y + dy;

    let dump: Coordinate[] = [];
    while (nx >= 0 && ny >= 0 && nx < 8 && ny < 8) {
      if (board[ny][nx] === current) {
        dump.forEach((coord) => {
          result[coord.y][coord.x] = true;
        });
        break;
      } else if (board[ny][nx] === opposite) {
        dump.push({ x: nx, y: ny });
      }
      nx += dx;
      ny += dy;
    }
  }

  return result;
};
