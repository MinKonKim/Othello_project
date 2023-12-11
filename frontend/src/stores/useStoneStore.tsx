import { create } from "zustand";

interface Stone {
  stonecount: number;
  current: number;
  whiteStone: number;
  blackStone: number;
  setBlackStoneCount(cnt: number): void;
  setWhiteStoneCount(cnt: number): void;
  setCurrent(stone: number): void;
  setStoneCount(cnt: number): void;
}

const useStoneStore = create<Stone>()((set) => ({
  current: 1,
  stonecount: 4, // 처음 4개
  whiteStone: 2,
  blackStone: 2,
  setBlackStoneCount: (cnt: number) =>
    set(() => ({
      blackStone: cnt,
    })),
  setWhiteStoneCount: (cnt: number) =>
    set(() => ({
      whiteStone: cnt,
    })),
  setCurrent: (stone: number) =>
    set(() => ({
      current: stone,
    })),
  setStoneCount: (cnt: number) =>
    set(() => ({
      stonecount: cnt,
    })),
}));
export default useStoneStore;
