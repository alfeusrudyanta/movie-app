import Cookies from 'js-cookie';
import { ZeroFavorite } from './components/ZeroFavorite';
import { MovieDetailCard } from '@/components/movie-detail-card';
import { COOKIE_KEY } from '@/constant/cookie';

const FavoritePage = () => {
  const favoriteMovies = Cookies.get(COOKIE_KEY);
  if (!favoriteMovies) return;

  const favoriteMoviesId: number[] = JSON.parse(favoriteMovies);

  return (
    <div className='md:px-11xl mt-38.5 flex flex-col gap-8 px-4 md:gap-12'>
      <h1 className='display-xs-bold text-neutral-25 md:display-lg-bold'>
        Favorites
      </h1>

      {favoriteMoviesId.length === 0 && <ZeroFavorite />}

      <div className='flex flex-col gap-8 md:gap-12'>
        {favoriteMoviesId.map((movieId, index) => (
          <div className='flex flex-col gap-8 md:gap-12'>
            <MovieDetailCard movieId={movieId} key={movieId} />
            {index < favoriteMoviesId.length - 1 && (
              <div className='w-full border border-neutral-800' />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export { FavoritePage };
