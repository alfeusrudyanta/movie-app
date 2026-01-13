import type { MovieDetailCardProps } from '@/components/movie-detail-card/types';
import { useMovieDetails } from '@/domains/movie/hooks/use-movie-details';
import { getImgUrl } from '@/utils/get-img-url';
import { Link } from 'react-router-dom';
import { FavoriteMovieButton } from '@/components/favorite-movie-button';
import { WatchMeButton } from '../watch-me-button';
import { Star } from 'lucide-react';

const MovieDetailCard: React.FC<MovieDetailCardProps> = ({ movieId }) => {
  const { data } = useMovieDetails(movieId);
  if (!data) return;

  return (
    <div className='flex w-full flex-col gap-6 md:flex-row md:gap-31.5'>
      <div className='flex w-full flex-row gap-4 md:gap-6'>
        <Link to={`/movie/${data.id}`}>
          <div className='h-39 w-26 shrink-0 overflow-hidden rounded-xl md:h-67.5 md:w-45.5'>
            <img
              src={getImgUrl(data.poster_path)}
              alt={data.title}
              className='h-full transform transition-all ease-in-out hover:scale-105'
              loading='lazy'
            />
          </div>
        </Link>

        <div className='flex flex-col gap-1 md:gap-3'>
          <Link to={`/movie/${data.id}`}>
            <h2 className='text-neutral-25 md:display-xs-bold text-md-bold'>
              {data.title}
            </h2>

            <div className='flex items-center gap-1'>
              <Star
                fill='#E4A802'
                stroke='#E4A802'
                className='size-4 md:size-6'
              />
              <p className='text-sm-medium md:text-lg-medium text-neutral-25'>
                {data.vote_average.toFixed(1)}/10
              </p>
            </div>

            <p className='text-sm-regular md:text-md-regular line-clamp-2 text-neutral-400'>
              {data.overview}
            </p>
          </Link>

          <WatchMeButton movieId={movieId} className='hidden md:flex' />
        </div>
      </div>

      {/* Mobile Item */}
      <div className='flex flex-row gap-4'>
        <WatchMeButton
          movieId={movieId}
          className='grow md:hidden md:flex-none'
        />
        <FavoriteMovieButton movieId={movieId} />
      </div>
    </div>
  );
};

export { MovieDetailCard };
