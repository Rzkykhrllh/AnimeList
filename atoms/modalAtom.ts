import { DocumentData } from "firebase/firestore";
import { atom } from "recoil";
import { TMovie } from "../types/movie.type";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const movieState = atom<TMovie | DocumentData | null>({
  key: "movieState",
  default: null,
});
