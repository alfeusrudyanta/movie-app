import { AxiosInstance } from '@/services/axios';
import type {
  NewReleasedMoviesParams,
  NewReleasedMovies,
  TrendingNowMovies,
} from '@/features/home-page/types';

const apiHome = {
  getNewRelease: async (
    params: NewReleasedMoviesParams
  ): Promise<NewReleasedMovies> => {
    const res = await AxiosInstance.get('/movie/now_playing', {
      params,
    });
    return res.data;
  },
  getTrendingNow: async (): Promise<TrendingNowMovies> => {
    const res = await AxiosInstance.get('/trending/movie/week');
    return res.data;
  },
};

export { apiHome };
