export const CountingStone = (board: number[][], stoneIdx: number): number => {
  let count = 0;
  board.forEach((row) => {
    row.forEach((value) => {
      if (value === stoneIdx) {
        count += 1;
      }
    });
  });

  return count;
};
