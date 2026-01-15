import { cn } from '@/libs/utils';
import { getImgUrl } from '@/utils/get-img-url';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { MovieCardProps } from '@/features/home-page/types';

const MovieCard: React.FC<MovieCardProps> = ({
  index,
  id,
  poster_path,
  title,
  vote_average,
  showNumber = false,
}) => {
  return (
    <Link to={`/movie/${id}`} className='group flex flex-col gap-2 md:gap-3'>
      <div
        className={cn(
          'relative h-43.25 cursor-pointer overflow-hidden rounded-md md:h-80.25',
          showNumber && 'w-43.5 md:w-54'
        )}
      >
        {/* Number Badge */}
        {showNumber && (
          <div className='blur-in-xl absolute top-2 left-2 z-10 flex size-8 items-center justify-center rounded-full bg-neutral-950/60'>
            <p className='text-sm-semibold text-neutral-25 md:text-lg-semibold'>
              {index}
            </p>
          </div>
        )}

        <img
          src={getImgUrl(poster_path)}
          alt={title}
          className='h-full w-full transition-all ease-in-out group-hover:scale-105'
          loading='lazy'
        />
      </div>

      <div className='flex flex-col gap-0.5'>
        <p className='text-md-semibold text-neutral-25 md:text-lg-semibold line-clamp-1'>
          {title}
        </p>

        <div className='flex items-center gap-1'>
          <Star
            className='size-4.5 md:size-5'
            fill='#E4A802'
            stroke='#E4A802'
          />

          <p className='text-sm-regular md:text-md-regular text-neutral-400'>
            {vote_average.toFixed(1)}/10
          </p>
        </div>
      </div>
    </Link>
  );
};

export { MovieCard };
