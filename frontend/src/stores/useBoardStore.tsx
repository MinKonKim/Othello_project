import { create } from "zustand";

interface BoardStore {
  board: number[][];
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
  setBoard: (newBoard) => set((state) => ({ board: newBoard(state.board) })),
}));

export default useBoardStore;
