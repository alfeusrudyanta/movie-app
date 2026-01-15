import { useSearchParams } from 'react-router-dom';
import { useMovieSearch } from './hooks/use-movie-search';
import { MovieDetailCardContainer } from '@/components/movie-detail-card';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { ZeroSearch } from './components/zero-search';
import { SpinnerCustom } from '@/components/ui/spinner';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isLoading,
  } = useMovieSearch({ query });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  const movies = data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <div className='md:px-11xl mt-16 flex flex-col gap-8 px-4 pt-4 md:mt-38.5 md:gap-12 md:pt-0'>
      {isLoading && <SpinnerCustom className='-mt-80 md:-mt-60' />}

      {movies.length === 0 && !isFetching && <ZeroSearch />}

      {movies.map((movie, index) => (
        <div key={movie.id} className='flex flex-col gap-8 md:gap-12'>
          <MovieDetailCardContainer
            movieId={movie.id}
            title={movie.title}
            overview={movie.overview}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
          />

          {index < movies.length - 1 && (
            <div className='w-full border border-neutral-800' />
          )}
        </div>
      ))}
      <div ref={ref} />
      {isFetchingNextPage && <p>Loading...</p>}
    </div>
  );
};

export { SearchPage };
