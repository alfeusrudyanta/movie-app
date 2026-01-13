import { CircleChevronRight } from 'lucide-react';
import { useMovieVideos } from './hooks/use-movie-videos';
import { Button } from '../ui/button';
import type { WatchMeButtonProps } from '@/components/watch-me-button/types';

const WatchMeButton: React.FC<WatchMeButtonProps> = ({
  movieId,
  className,
}) => {
  const { data, isLoading } = useMovieVideos(movieId);

  if (isLoading || !data) return null;

  const trailer = data.results.find(
    (video) =>
      video.site === 'YouTube' && video.type === 'Trailer' && video.official
  );

  if (!trailer) return null;

  const trailerUrl = `https://www.youtube.com/watch?v=${trailer.key}`;

  return (
    <Button asChild className={className}>
      <a href={trailerUrl} target='_blank'>
        Watch Trailer
        <CircleChevronRight className='size-4.5 md:size-6' />
      </a>
    </Button>
  );
};

export { WatchMeButton };
