import type { MovieDetailsProps } from '@/features/MoviePage/types';
import { getImgUrl } from '@/utils/getImgUrl';
import { CalendarDays } from 'lucide-react';
import { MovieActionsAndStats } from './MovieActionsAndStats';

const MovieDetails: React.FC<MovieDetailsProps> = ({ movieDetails }) => {
  const { data } = movieDetails;

  if (!data) return;

  return (
    <div>
      {/* Movie Backdrop Section */}
      <div className='relative overflow-hidden'>
        <img
          src={getImgUrl(data.backdrop_path)}
          alt={data.title}
          className='h-full min-h-85 w-full object-cover'
          loading='lazy'
        />
        <div className='absolute inset-0 overflow-hidden bg-linear-to-b from-transparent to-black' />
      </div>

      {/* Movie Info Section */}
      <div className='md:px-11xl relative z-10 -mt-[clamp(5rem,30vw,30rem)] flex w-full flex-col gap-6 px-4 md:gap-12'>
        <div className='flex flex-row gap-4 md:gap-8'>
          <img
            src={getImgUrl(data?.poster_path)}
            alt={data.title}
            className='h-43 w-30 rounded-xl md:h-96 md:w-65'
            loading='lazy'
          />

          <div className='flex w-full flex-col md:gap-6'>
            <div className='flex flex-col gap-1 md:gap-4'>
              <h1 className='text-neutral-25 md:display-xl-bold text-xl-bold'>
                {data.title}
              </h1>

              <div className='flex flex-row items-center gap-1 md:gap-2'>
                <CalendarDays className='text-neutral-25 h-5 w-5 md:h-6 md:w-6' />

                <p className='md:text-md-regular text-sm-regular text-white'>
                  {data.release_date}
                </p>
              </div>
            </div>

            {/* Desktop Only Elements */}
            <div className='hidden md:flex'>
              <MovieActionsAndStats
                adult={data.adult}
                id={data.id}
                vote_average={data.vote_average}
                genres={data.genres}
              />
            </div>
          </div>
        </div>

        {/* Mobile Only Elements */}
        <div className='md:hidden'>
          <MovieActionsAndStats
            adult={data.adult}
            id={data.id}
            vote_average={data.vote_average}
            genres={data.genres}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <h2 className='text-xl-bold text-neutral-25 md:display-md-bold'>
            Overview
          </h2>
          <p className='md:text-md-regular text-sm-regular text-neutral-400'>
            {data.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export { MovieDetails };
