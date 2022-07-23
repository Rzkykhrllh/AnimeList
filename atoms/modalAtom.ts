import { DocumentData } from "firebase/firestore";
import { atom } from "recoil";
import { TAnime } from "../types/movie.type";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const animeState = atom<TAnime | DocumentData | null>({
  key: "animeState",
  default: null,
});
