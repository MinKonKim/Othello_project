import { create } from "zustand";

interface BoardStore {
  board: number[][];
  isCanMove: boolean;
  resetBoard: () => void;
  setIsCanMove: (move: boolean) => void;
  setBoard: (newBoard: (prevBoard: number[][]) => number[][]) => void;
}

const useBoardStore = create<BoardStore>()((set) => ({
  board: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ],
  isCanMove: false,
  resetBoard: () =>
    set(() => ({
      board: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 1, 0, 0, 0],
        [0, 0, 0, 1, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
      ],
    })),
  setIsCanMove: (move) => set(() => ({ isCanMove: move })),
  setBoard: (newBoard) => set((state) => ({ board: newBoard(state.board) })),
}));

export default useBoardStore;
