import { FavoriteMovieButton } from '@/components/favorite-movie-button';
import { WatchMeButton } from '@/components/watch-me-button';
import { Smile, Star, Video } from 'lucide-react';
import type { MovieActionsAndStatsProps } from '../types';

const MovieActionsAndStats: React.FC<MovieActionsAndStatsProps> = ({
  vote_average,
  genres,
  adult,
  id,
}) => {
  const movieProps = [
    {
      label: 'Rating',
      desc: `${vote_average?.toFixed(1) || '0'}/10`,
    },
    {
      label: 'Genre',
      desc: genres?.[0]?.name || 'Unknown',
    },
    {
      label: 'Age\u00A0limit',
      desc: adult ? '18+' : '13',
    },
  ];

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex w-full items-center gap-4'>
        <WatchMeButton movieId={id} className='grow md:flex-none' />
        <FavoriteMovieButton movieId={id} />
      </div>

      <div className='grid w-full grid-cols-3 gap-3 md:gap-5'>
        {movieProps.map((item) => (
          <div
            key={item.label}
            className='flex w-full flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-800 bg-black p-5'
          >
            {item.label === 'Rating' ? (
              <Star
                className='h-6 w-6 md:h-8 md:w-8'
                fill='#E4A802'
                stroke='#E4A802'
              />
            ) : item.label === 'Genre' ? (
              <Video
                className='h-6 w-6 md:h-8 md:w-8'
                fill='#FDFDFD'
                stroke='#FDFDFD'
              />
            ) : (
              <Smile className='h-6 w-6 md:h-8 md:w-8' stroke='#FDFDFD' />
            )}

            <div className='flex flex-col text-center md:gap-0.5'>
              <p className='text-xs-regular md:text-md-regular text-neutral-300'>
                {item.label}
              </p>
              <p className='text-lg-semibold md:text-xl-semibold text-neutral-25'>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { MovieActionsAndStats };
