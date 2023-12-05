import { create } from "zustand";

interface Points {
  latestX: number;
  latestY: number;
  setlatestX(x: number): void;
  setlatestY(y: number): void;
}

const uselatestPoint = create<Points>()((set) => ({
  latestX: 0,
  latestY: 0,
  setlatestX: (x: number) =>
    set(() => ({
      latestX: x,
    })),
  setlatestY: (y: number) =>
    set(() => ({
      latestY: y,
    })),
}));

export default uselatestPoint;
