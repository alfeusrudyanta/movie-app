import { AxiosInstance } from '@/services/axios';
import type {
  NewReleasedMoviesParams,
  NewReleasedMovies,
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
};

export { apiHome };
