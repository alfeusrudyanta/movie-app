type MovieDetailCardContainerProps = {
  movieId: number;
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string | null;
};

type MovieDetailCardProps = {
  movieId: number;
};

export type { MovieDetailCardContainerProps, MovieDetailCardProps };
