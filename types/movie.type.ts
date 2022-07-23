type TTitle = {
  romaji: string;
  english: string;
  native: string;
  userPreferred: string;
};

type TDate = {
  year: string;
  month: string;
  day: string;
};

type TCoverImage = {
  extraLarge: string;
  large: string;
  medium: string;
  color: string;
};

type TTrailer = {
  site: string;
  id: string;
  thumbnail: string;
};

export type TAnime = {
  description: string;
  id: number;
  title: TTitle;
  format: string;
  status: string;
  startDate: TDate;
  endDate: TDate;
  episodes: number;
  genres: string[];
  season: string;
  countryOfOrigin: string;
  coverImage: TCoverImage;
  bannerImage: string;
  source: string;
  trailer: TTrailer;
  meanScore: number;
};

export type TAnimeList = TAnime[] | [];

export type TAnimeCollections = {
  [key: string]: TAnimeList;
};
