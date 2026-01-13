import React from 'react';
import type { MovieCreditsProps } from '../types';
import { getImgUrl } from '@/utils/getImgUrl';

const MovieCredits: React.FC<MovieCreditsProps> = ({ movieCredits }) => {
  const { data } = movieCredits;

  const topCast = data?.cast.slice(0, 5) || [];

  return (
    <div className='md:mx-11xl mx-4 flex flex-col gap-4 md:gap-6'>
      <h3 className='text-xl-bold text-neutral-25 md:display-md-bold'>
        Cast & Crew
      </h3>

      <div className='grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-10'>
        {topCast.map((person) => (
          <div key={person.id} className='flex items-center gap-3 md:gap-4'>
            <img
              src={getImgUrl(person.profile_path)}
              alt={person.name}
              className='h-21 w-13.75 rounded-md md:h-26 md:w-17.25'
              loading='lazy'
            />
            <div>
              <p className='text-neutral-25 text-sm-semibold md:text-md-semibold'>
                {person.name}
              </p>
              <p className='md:text-md-regular text-sm-regular text-neutral-400'>
                {person.character}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { MovieCredits };
