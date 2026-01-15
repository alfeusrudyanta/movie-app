import type { NewReleasedMoviesProps } from '@/features/home-page/types';
import { MovieCard } from './movie-card';

const NewRelease: React.FC<NewReleasedMoviesProps> = ({
  newReleasedMovies,
}) => {
  const { data } = newReleasedMovies;

  return (
    <div className='md:mx-11xl mx-4'>
      <div className='flex flex-col gap-6 md:gap-10'>
        <h1 className='display-xs-bold text-neutral-25 md:display-lg-bold'>
          New Release
        </h1>

        <div className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-5 md:gap-x-4 md:gap-y-10'>
          {data?.pages.map((movies) =>
            movies.results.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export { NewRelease };
