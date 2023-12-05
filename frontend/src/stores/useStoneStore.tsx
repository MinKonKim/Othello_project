import { create } from "zustand";

interface Stone {
  current: number;
  setCurrent(next: number): void;
}

const useStoneStore = create<Stone>()((set) => ({
  current: 1,
  setCurrent: (next: number) =>
    set(() => ({
      current: next,
    })),
}));
export default useStoneStore;
