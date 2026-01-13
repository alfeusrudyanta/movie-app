import { useQuery } from '@tanstack/react-query';
import type { MovieDetails } from '@/domains/movie/types/MovieDetails';
import { apiMovie } from '@/domains/movie/api/apiMovie';

const useMovieDetails = (movieId: number) => {
  return useQuery<MovieDetails, Error>({
    queryKey: ['movie', movieId],
    queryFn: () => {
      return apiMovie.getMovieDetails(movieId as number);
    },
  });
};

export { useMovieDetails };
