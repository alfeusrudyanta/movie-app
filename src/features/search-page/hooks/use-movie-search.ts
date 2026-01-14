import { useInfiniteQuery } from '@tanstack/react-query';
import type {
  MovieSearchParams,
  MovieSearchList,
} from '@/features/search-page/types';
import { apiSearch } from '../api/api-search';

const useMovieSearch = (params: MovieSearchParams) => {
  return useInfiniteQuery<MovieSearchList, Error>({
    queryKey: ['movieSearch', params],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      apiSearch.getMovieSearch({
        ...params,
        page: Number(pageParam),
      }),
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return nextPage <= lastPage.total_pages ? nextPage : undefined;
    },
    enabled: Boolean(params.query),
  });
};

export { useMovieSearch };
