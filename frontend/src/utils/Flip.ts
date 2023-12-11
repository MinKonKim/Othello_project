import { Coordinate } from "../models/Coordinate";
import { DirX, DirY, Opposite } from "./Global";

export const Flip = (
  /**
   *  board
   *  최근에 찍은 좌표
   *  해당 좌표에 찍은 돌
   */
  board: number[][],
  x: number,
  y: number,
  stone: number
): boolean[][] => {
  let result: boolean[][] = Array.from({ length: 8 }, () =>
    Array(8).fill(false)
  );

  const opposite = Opposite(stone);
  let dump: Coordinate[] = [];

  for (let i = 0; i < 8; i++) {
    let dx = DirX[i];
    let dy = DirY[i];

    let nx = x + dx;
    let ny = y + dy;

    let temp: Coordinate[] = [];
    while (nx >= 0 && ny >= 0 && nx < 8 && ny < 8) {
      if (board[ny][nx] === 0) {
        break;
      } else if (board[ny][nx] === stone) {
        if (temp.length > 0) {
          dump = dump.concat(temp);
        }
        break;
      } else if (board[ny][nx] === opposite) {
        temp.push({ y: ny, x: nx });
      }
      ny += dy;
      nx += dx;
    }
  }
  dump.forEach((element) => {
    result[element.y][element.x] = true;
  });

  return result;
};
