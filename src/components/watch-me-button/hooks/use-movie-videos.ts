import { useQuery } from '@tanstack/react-query';
import type { MovieVideo } from '@/components/watch-me-button/types';
import { apiVideo } from '../api/api-video';

const useMovieVideos = (movieId: number) => {
  return useQuery<MovieVideo, Error>({
    queryKey: ['video', movieId],
    queryFn: () => {
      return apiVideo.getVideoDetails(movieId as number);
    },
  });
};

export { useMovieVideos };
