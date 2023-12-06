import { create } from "zustand";
import { User } from "../models/User";
import { Coordinate } from "../models/Coordinate";
interface UserStore {
  user: User;
  latestCoord: Coordinate;
  setUser: (name: string, isAdmin: boolean) => void;
  setUserlatesetCoord: (coord: Coordinate) => void;
}

const useUserStore = create<UserStore>()((set) => ({
  user: {
    name: "",
    isAdmin: false,
  },
  latestCoord: { x: 0, y: 0 },
  setUser: (name: string, isAdmin: boolean) =>
    set(() => ({
      user: { name, isAdmin },
    })),
  setUserlatesetCoord: (coord: Coordinate) =>
    set(() => ({
      latestCoord: coord,
    })),
}));
