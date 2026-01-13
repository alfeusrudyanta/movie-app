import movieFavoriteIcon from '../../../../public/icon/movie-favorite.svg';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ZeroFavorite = () => {
  return (
    <div className='mt-21 flex w-full flex-col items-center gap-6 px-11.5 md:mt-26'>
      <div className='flex flex-col items-center gap-3 md:gap-4'>
        <img
          src={movieFavoriteIcon}
          alt='movieFavoriteIcon'
          className='size-50'
        />

        <div className='gap-2 text-center'>
          <p className='text-md-semibold text-white'>Data Empty</p>
          <p className='text-sm-regular text-neutral-400'>
            You don't have a favorite movie yet
          </p>
        </div>
      </div>

      <Link to='/'>
        <Button className='w-50 md:w-75'>Explore Movie</Button>
      </Link>
    </div>
  );
};

export { ZeroFavorite };
