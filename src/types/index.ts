export type Film = {
  id: number;
  title: string;
  rating: number;
  overview: string;
  releaseDate: string;
  genreIds: Array<number>;
  smallPoster: string;
  bigPoster: string;
};
