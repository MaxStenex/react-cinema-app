export type Film = {
  id: number;
  title: string;
  rating: number;
  overview: string;
  releaseDate: string;
  smallPoster: string;
};

export type FilmDetails = {
  id: null | number;
  title: string;
  rating: null | number;
  duration: null | number;
  filmGenres: Array<{ id: number; name: string }>;
  productionCountries: Array<string>;
  overview: string;
  poster: string;
};
