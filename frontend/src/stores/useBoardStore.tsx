import { create } from "zustand";

interface BoardStore {
  board: number[][];
  setBoard: (newBoard: number[][]) => void;
}

const initialState: BoardStore = {
  board: Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => 0)),
  setBoard: () => {},
};

const useBoardStore = create<BoardStore>()((set) => ({
  ...initialState,
  setBoard: (newBoard) =>
    set({
      board: newBoard,
    }),
}));

export default useBoardStore;
