import { AxiosInstance } from '@/services/axios';
import type { MovieDetails } from '@/domains/movie/types';

const apiMovie = {
  getMovieDetails: async (movieId: number): Promise<MovieDetails> => {
    const res = await AxiosInstance.get(`/movie/${movieId}`);
    return res.data;
  },
};

export { apiMovie };
