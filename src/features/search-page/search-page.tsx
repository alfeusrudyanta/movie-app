import { useSearchParams } from 'react-router-dom';
import { useMovieSearch } from './hooks/use-movie-search';
import { MovieDetailCardContainer } from '@/components/movie-detail-card';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useMovieSearch({ query });

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
    <div className='md:px-11xl mt-38.5 flex flex-col gap-8 px-4 md:gap-12'>
      {movies.map((movie, index) => (
        <div className='flex flex-col gap-8 md:gap-12'>
          <MovieDetailCardContainer
            key={movie.id}
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
