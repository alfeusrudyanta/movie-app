import type { MovieDetailCardProps } from '@/components/movie-detail-card/types';
import { useMovieDetails } from '@/domains/movie/hooks/use-movie-details';
import { MovieDetailCardContainer } from '@/components/movie-detail-card';

const MovieDetailCard: React.FC<MovieDetailCardProps> = ({ movieId }) => {
  const { data } = useMovieDetails(movieId);
  if (!data) return;

  return (
    <MovieDetailCardContainer
      key={movieId}
      movieId={movieId}
      title={data.title}
      overview={data.overview}
      poster_path={data.poster_path}
      vote_average={data.vote_average}
    />
  );
};

export { MovieDetailCard };
