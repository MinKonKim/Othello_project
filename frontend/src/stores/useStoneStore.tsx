import { create } from "zustand";

interface Stone {
  stonecount: number;
  current: number;
  setCurrent(stone: number): void;
  setStoneCount(cnt: number): void;
}

const useStoneStore = create<Stone>()((set) => ({
  current: 1,
  stonecount: 4, // 처음 4개
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
