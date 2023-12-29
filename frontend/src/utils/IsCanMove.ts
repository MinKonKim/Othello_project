export const IsCanMove = (target: boolean[][]): boolean => {
  // 타깃이 잇으면 움직일 돌이 있는 것.
  for (let i = 0; i < target.length; i++) {
    for (let j = 0; j < target[i].length; j++) {
      const element = target[i][j];

      if (element) return false;
    }
  }

  return true;
};
