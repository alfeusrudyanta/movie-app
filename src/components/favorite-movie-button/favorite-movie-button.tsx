import Cookies from 'js-cookie';
import { useState } from 'react';
import type { FavoriteMovieButtonProps } from './types';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';
import { COOKIE_KEY } from '@/constant/cookie';
import { toast } from 'sonner';

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
      toast.success('Success Delete from Favorites');
    } else {
      const updated = [...ids, movieId];
      setFavoriteMovieIds(updated);
      setIsLiked(true);
      toast.success('Success Add to Favorites');
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
