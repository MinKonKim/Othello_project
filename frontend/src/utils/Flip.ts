import { Coordinate } from "../models/Coordinate";
import { DirX, DirY, Opposite } from "./Global";

export const Flip = (
  board: number[][],
  x: number,
  y: number,
  current: number
): boolean[][] => {
  let result: boolean[][] = Array.from({ length: 8 }, () =>
    Array(8).fill(false)
  );
  const opposite = Opposite(current);
  let dump: Coordinate[] = [];

  for (let i = 0; i < 8; i++) {
    let dx = DirX[i];
    let dy = DirY[i];

    let nx = x + dx;
    let ny = y + dy;

    let temp: Coordinate[] = [];
    while (nx >= 0 && ny >= 0 && nx < 8 && ny < 8) {
      if (board[ny][nx] === current && temp.length > 0) {
        dump = dump.concat(temp);
        break;
      } else if (board[ny][nx] === opposite) {
        temp.push({ y: ny, x: nx });
      }
      nx += dx;
      ny += dy;
    }
  }
  dump.forEach((element) => {
    result[element.y][element.x] = true;
  });

  return result;
};
