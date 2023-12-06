import { Coordinate } from "../models/Coordinate";

export const DirX: number[] = [1, -1, 0, 0, 1, 1, -1, -1];
export const DirY: number[] = [0, 0, 1, -1, 1, -1, 1, -1];
export const Opposite = (current: number): number => {
  const opposite = current === 1 ? 2 : 1;
  return opposite;
};
export const FindStoneIdx = (board: number[][], stone: number) => {
  let idx: Coordinate = { x: 0, y: 0 };
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === stone) {
        idx.x = j;
        idx.y = i;
        return idx;
      }
    }
  }
  return idx;
};

/** 디버깅 용  */
export const PrintStoneState = (stoneIdx: number) => {
  let stone;
  stone = stoneIdx === 1 ? "흑돌" : "백돌";
  return stone;
};
