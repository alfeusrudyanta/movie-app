import { useQuery } from '@tanstack/react-query';
import type { MovieCredits } from '@/features/movie-page/types';
import { apiMovie } from '@/features/movie-page/api/api-movie';

const useMovieCredits = (movieId: number) => {
  return useQuery<MovieCredits, Error>({
    queryKey: ['movieCredit', movieId],
    queryFn: () => {
      return apiMovie.getMovieCredits(movieId as number);
    },
  });
};

export { useMovieCredits };
