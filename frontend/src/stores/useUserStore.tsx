import { create } from "zustand";
import { User } from "../models/User";
import { Coordinate } from "../models/Coordinate";
interface UserStore {
  user: User;
  latestCoord: Coordinate;
  userStone: number;
  setUser: (name: string, isAdmin: boolean) => void;
  setUserlatesetCoord: (coord: Coordinate) => void;
  setUserStone: (stone: number) => void;
}

const useUserStore = create<UserStore>()((set) => ({
  user: {
    name: "",
    isAdmin: false,
  },
  latestCoord: { x: 0, y: 0 },
  userStone: 1,
  setUser: (name: string, isAdmin: boolean) =>
    set(() => ({
      user: { name, isAdmin },
    })),
  setUserlatesetCoord: (coord: Coordinate) =>
    set(() => ({
      latestCoord: coord,
    })),
  setUserStone: (stone: number) =>
    set(() => ({
      userStone: stone,
    })),
}));
