import { useInfiniteQuery } from '@tanstack/react-query';
import type { NewReleasedMoviesParams } from '@/features/home-page/types';
import { apiHome } from '../api/api-home';

const useNewRelease = (params: NewReleasedMoviesParams) => {
  return useInfiniteQuery({
    queryKey: ['newRelease', params],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      apiHome.getNewRelease({ ...params, page: pageParam }),
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return nextPage <= lastPage.total_pages ? nextPage : undefined;
    },
  });
};

export { useNewRelease };
