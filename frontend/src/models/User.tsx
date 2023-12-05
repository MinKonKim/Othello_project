import { Coordinate } from "../utils/CheckPlace";

export type User = {
  name: string;
  isAdmin: boolean;
  latestCoord: Coordinate;
};
