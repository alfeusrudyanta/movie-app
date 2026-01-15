import type { UseQueryResult } from '@tanstack/react-query';

type TrendingNowMovie = {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type TrendingNowMovies = {
  page: number;
  results: TrendingNowMovie[];
  total_pages: number;
  total_results: number;
};

type TrendingNowMoviesProps = {
  trendingNowMovies: UseQueryResult<TrendingNowMovies, Error>;
};

type MovieCardProps = {
  index?: number;
  id: number;
  showNumber?: boolean;
  poster_path: string;
  title: string;
  vote_average: number;
};

export type {
  TrendingNowMovie,
  TrendingNowMovies,
  TrendingNowMoviesProps,
  MovieCardProps,
};
