export const IsCanMove = (target: boolean[][] | number): boolean => {
  // let result = false;

  for (let i = 0; i < target.length; i++) {
    for (let j = 0; j < target[i].length; j++) {
      const element = target[i][j];

      if (element) return false;
    }
  }

  return true;
};
