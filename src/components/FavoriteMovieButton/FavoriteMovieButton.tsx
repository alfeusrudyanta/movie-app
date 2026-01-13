import Cookies from 'js-cookie';
import { useState } from 'react';
import type { FavoriteMovieButtonProps } from './types';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';

const COOKIE_KEY = 'favoriteMovieId';

const FavoriteMovieButton: React.FC<FavoriteMovieButtonProps> = ({
  movieId,
  className,
}) => {
  const [isLiked, setIsLiked] = useState(() => {
    const raw = Cookies.get(COOKIE_KEY);
    if (!raw) return false;

    try {
      const ids: number[] = JSON.parse(raw);
      return ids.includes(movieId);
    } catch {
      return false;
    }
  });

  const setFavoriteMovieIds = (ids: number[]) => {
    Cookies.set(COOKIE_KEY, JSON.stringify(ids), {
      expires: 7,
      sameSite: 'lax',
    });
  };

  const toggleLike = () => {
    const raw = Cookies.get(COOKIE_KEY);
    const ids: number[] = raw ? JSON.parse(raw) : [];

    if (isLiked) {
      const updated = ids.filter((id) => id !== movieId);
      setFavoriteMovieIds(updated);
      setIsLiked(false);
    } else {
      const updated = [...ids, movieId];
      setFavoriteMovieIds(updated);
      setIsLiked(true);
    }
  };

  return (
    <Button
      onClick={toggleLike}
      variant='icon'
      size='icon'
      className={className}
    >
      <Heart
        fill={isLiked ? '#961200' : ''}
        className='size-6'
        stroke={isLiked ? '#961200' : 'white'}
      />
    </Button>
  );
};

export { FavoriteMovieButton };
