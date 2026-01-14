import { useQuery } from '@tanstack/react-query';
import type { TrendingNowMovies } from '@/features/home-page/types';
import { apiHome } from '../api/api-home';

const useTrendingMovies = () => {
  return useQuery<TrendingNowMovies, Error>({
    queryKey: ['tredingMovies'],
    queryFn: () => {
      return apiHome.getTrendingNow();
    },
  });
};

export { useTrendingMovies };
