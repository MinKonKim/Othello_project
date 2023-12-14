export const IsCanMove = (target: boolean[][]): boolean => {
  // let result = false;
  target.forEach((row) => {
    row.forEach((value) => {
      if (value) {
        return true;
      }
    });
  });

  return false;
};
