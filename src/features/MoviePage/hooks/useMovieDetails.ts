import { useQuery } from '@tanstack/react-query';
import type { MovieDetails } from '@/features/MoviePage/types';
import { apiMovie } from '@/features/MoviePage/api/apiMovie';

const useMovieDetails = (movieId: number) => {
  return useQuery<MovieDetails, Error>({
    queryKey: ['movie', movieId],
    queryFn: () => {
      return apiMovie.getMovieDetails(movieId as number);
    },
  });
};

export { useMovieDetails };
