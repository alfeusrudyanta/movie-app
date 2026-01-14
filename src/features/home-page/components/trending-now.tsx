import type { TrendingNowMoviesProps } from '@/features/home-page/types';
import { MovieCard } from './movie-card';

const TrendingNow: React.FC<TrendingNowMoviesProps> = ({
  trendingNowMovies,
}) => {
  return (
    <div className='flex flex-col gap-6 md:gap-10'>
      <h1 className='display-xs-bold md:display-lg-bold text-neutral-25 md:mx-11xl mx-3'>
        Trending Now
      </h1>

      <div className='md:mx-11xl mx-3'>
        <div className='scrollbar-hide flex gap-4 overflow-x-auto md:gap-5'>
          {trendingNowMovies.data?.results.map((movie, index) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              vote_average={movie.vote_average}
              showNumber={true}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { TrendingNow };
