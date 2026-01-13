import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <div className='md:px-11xl mt-12 flex max-h-30 flex-col gap-2 border-t border-neutral-800 px-4 py-6 md:mt-37.5 md:flex-row md:items-center md:justify-between md:py-10'>
      {/* Icon */}
      <Link to='/'>
        <div className='flex gap-1'>
          <img
            src='/icon/movie-icon.svg'
            alt='movie-app-icon'
            className='size-7 md:size-10'
          />
          <p className='text-neutral-25 text-xl-semibold md:display-sm-semibold md:pt-[0.25rem]'>
            Movie
          </p>
        </div>
      </Link>

      {/* Copyright */}
      <p className='text-xs-regular md:text-md-regular text-neutral-600'>
        Copyright ©2025 Movie Explorer
      </p>
    </div>
  );
};

export { Footer };
