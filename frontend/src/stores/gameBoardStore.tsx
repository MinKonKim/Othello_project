import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Board {
  value: number;
}

interface BoardStore {
  values: Board[];
  addValue(prev: number): void;
}

const useBoardStore = create<BoardStore>()(
  persist(
    (set) => ({
      values: [],
      addValue: (value: number) =>
        set((state) => ({
          values: [
            ...state.values,
            {
              value: value,
            },
          ],
        })),
    }),
    {
      name: "board-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useBoardStore;
