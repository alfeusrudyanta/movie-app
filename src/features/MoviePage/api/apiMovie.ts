import { AxiosInstance } from '@/services/axios';
import type { MovieDetails, MovieCredits } from '@/features/MoviePage/types';

const apiMovie = {
  getMovieDetails: async (movieId: number): Promise<MovieDetails> => {
    const res = await AxiosInstance.get(`/movie/${movieId}`);
    return res.data;
  },

  getMovieCredits: async (movieId: number): Promise<MovieCredits> => {
    const res = await AxiosInstance.get(`movie/${movieId}/credits`);
    return res.data;
  },
};

export { apiMovie };
