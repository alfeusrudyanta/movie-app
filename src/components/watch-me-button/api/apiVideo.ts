import { AxiosInstance } from '@/services/axios';
import type { MovieVideo } from '@/components/watch-me-button/types';

const apiVideo = {
  getVideoDetails: async (movieId: number): Promise<MovieVideo> => {
    const res = await AxiosInstance.get(`/movie/${movieId}/videos`);
    return res.data;
  },
};

export { apiVideo };
