import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface BoardStore {
  gameBoard: any[];
  setGameBoard: (newBoard: any[]) => void;
}

export const useBoardStore = create<BoardStore>()(
  devtools(
    persist(
      (set) => ({
        gameBoard: [],
        setGameBoard: (newBoard) => set({ gameBoard: newBoard }),
      }),
      {
        name: "boardStore",
      }
    )
  )
);
