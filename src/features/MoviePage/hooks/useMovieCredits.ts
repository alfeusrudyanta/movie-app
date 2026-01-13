import { useQuery } from '@tanstack/react-query';
import type { MovieCredits } from '@/features/MoviePage/types';
import { apiMovie } from '@/features/MoviePage/api/apiMovie';

const useMovieCredits = (movieId: number) => {
  return useQuery<MovieCredits, Error>({
    queryKey: ['movieCredit', movieId],
    queryFn: () => {
      return apiMovie.getMovieCredits(movieId as number);
    },
  });
};

export { useMovieCredits };
