import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface BoardStore {
  board: number[][];
  setBoard(array: number[][]): void;
}

const useBoardStore = create<BoardStore>()(
  persist(
    (set) => ({
      board: Array.from({ length: 8 }, () =>
        Array.from({ length: 8 }, () => 0)
      ),

      setBoard: (array) =>
        set(() => ({
          board: array,
        })),
    }),
    {
      name: "board-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useBoardStore;
