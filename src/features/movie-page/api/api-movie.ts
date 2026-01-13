import { AxiosInstance } from '@/services/axios';
import type { MovieCredits } from '@/features/movie-page/types';

const apiMovie = {
  getMovieCredits: async (movieId: number): Promise<MovieCredits> => {
    const res = await AxiosInstance.get(`movie/${movieId}/credits`);
    return res.data;
  },
};

export { apiMovie };
