export const IsCanMove = (target: boolean[][]): boolean => {
  let result = false;
  target.forEach((row) => {
    row.forEach((e) => {
      if (e) {
        result = true;
      }
    });
  });

  return result;
};
