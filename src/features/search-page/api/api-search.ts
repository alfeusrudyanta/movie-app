import { AxiosInstance } from '@/services/axios';
import type {
  MovieSearchParams,
  MovieSearchList,
} from '@/features/search-page/types';

const apiSearch = {
  getMovieSearch: async (
    params: MovieSearchParams
  ): Promise<MovieSearchList> => {
    const res = await AxiosInstance.get('search/movie', {
      params,
    });
    return res.data;
  },
};

export { apiSearch };
