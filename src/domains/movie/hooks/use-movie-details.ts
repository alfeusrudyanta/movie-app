import { useQuery } from '@tanstack/react-query';
import type { MovieDetails } from '@/domains/movie/types';
import { apiMovie } from '@/domains/movie/api/api-movie';

const useMovieDetails = (movieId: number) => {
  return useQuery<MovieDetails, Error>({
    queryKey: ['movie', movieId],
    queryFn: () => {
      return apiMovie.getMovieDetails(movieId as number);
    },
  });
};

export { useMovieDetails };
