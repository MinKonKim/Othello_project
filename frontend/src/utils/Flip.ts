import { Coordinate } from "../models/Coordinate";
import { DirX, DirY, Opposite, PrintStoneState } from "./Global";

export const Flip = (
  board: number[][],
  x: number,
  y: number,
  current: number
): boolean[][] => {
  const result: boolean[][] = Array.from({ length: 8 }, () =>
    Array(8).fill(false)
  );
  const opposite = Opposite(current);
  let dump: Coordinate[] = [];
  // console.log("현재 돌 : " + PrintStoneState(current));
  // console.log("뒤집어야 할 돌 : " + PrintStoneState(opposite));

  for (let i = 0; i < 8; i++) {
    let dx = DirX[i];
    let dy = DirY[i];

    let nx = x + dx;
    let ny = y + dy;

    let temp: Coordinate[] = [];
    while (nx >= 0 && ny >= 0 && nx < 8 && ny < 8) {
      if (board[ny][nx] === current) {
        dump = dump.concat(temp);
        break;
      } else if (board[ny][nx] === opposite) {
        temp.push({ x: nx, y: ny });
      }
      nx += dx;
      ny += dy;
    }
  }
  dump.forEach((element) => {
    result[element.y][element.y] = true;
  });

  return result;
};
