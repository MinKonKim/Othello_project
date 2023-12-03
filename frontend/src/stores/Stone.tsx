import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Stone {
  current: number;
  setCurrent(next: number): void;
}

const useStoneStore = create<Stone>()(
  persist(
    (set) => ({
      current: 1,
      setCurrent: (next: number) =>
        set(() => ({
          current: next,
        })),
    }),
    {
      name: "stone-board",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
export default useStoneStore;
