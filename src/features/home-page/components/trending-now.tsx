import type {
  TrendingNowMovie,
  TrendingNowMoviesProps,
} from '@/features/home-page/types';
import { MovieCard } from './movie-card';
import { useEffect, useRef, useState } from 'react';
import { getImgUrl } from '@/utils/get-img-url';
import { WatchMeButton } from '@/components/watch-me-button';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import bgWhite from '/icon/bg-white.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TrendingNow: React.FC<TrendingNowMoviesProps> = ({
  trendingNowMovies,
}) => {
  const [movie, setMovie] = useState<TrendingNowMovie | undefined>(() => {
    return trendingNowMovies.data?.results[0];
  });
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, [scrollContainerRef]);

  if (!movie) {
    return null;
  }

  const handleMouseHover = (id: number) => {
    const data =
      trendingNowMovies.data?.results.find((movie) => movie.id === id) ??
      undefined;

    setMovie(data);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -1000,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 1000,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      {/* Hero */}
      <div className='relative'>
        {/* Background Overlay */}
        <div className='pointer-events-none absolute inset-0 bg-linear-to-b from-transparent to-black' />

        {/* Background Image */}
        <img
          src={getImgUrl(movie?.backdrop_path) ?? bgWhite}
          alt={movie.title}
          className='min-h-133.25 w-full object-cover'
          loading='lazy'
        />

        {/* Trending Now Movie */}
        <div className='md:mx-11xl absolute bottom-1/16 left-0 mx-4 flex max-w-158.75 flex-col gap-6 md:bottom-1/3 md:gap-12'>
          <div className='flex flex-col gap-1.5 md:gap-4'>
            <h1 className='display-xs-bold text-neutral-25 md:display-2xl-bold'>
              {movie.title}
            </h1>
            <p className='md:text-md-regular text-sm-regular line-clamp-5 text-neutral-400 md:line-clamp-3'>
              {movie.overview}
            </p>
          </div>

          <div className='flex flex-col gap-4 md:flex-row'>
            <WatchMeButton movieId={movie.id} className='md:w-57.5' />
            <Link to={`/movie/${movie.id}`}>
              <Button className='border border-neutral-900 bg-neutral-950/60 transition-colors hover:bg-neutral-950 md:w-57.5'>
                See Detail
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Trending Now List */}
      <div className='relative z-10 flex flex-col gap-6 md:-mt-12 md:gap-10'>
        <h1 className='display-xs-bold md:display-lg-bold text-neutral-25 md:mx-11xl mx-4'>
          Trending Now
        </h1>

        <div className='relative'>
          {showRightArrow && (
            <div className='absolute right-0 z-10 flex h-full w-[10%] items-center justify-center bg-linear-to-r from-transparent to-black pr-4 text-white'>
              <Button variant='icon' size='icon' onClick={scrollRight}>
                <ChevronRight className='size-5.5 md:size-7' />
              </Button>
            </div>
          )}

          {showLeftArrow && (
            <div className='absolute left-0 z-10 flex h-full w-[10%] items-center justify-center bg-linear-to-l from-transparent to-black pl-4 text-white'>
              <Button variant='icon' size='icon' onClick={scrollLeft}>
                <ChevronLeft className='size-5.5 md:size-7' />
              </Button>
            </div>
          )}
          <div
            className='scrollbar-hide md:px-11xl flex gap-4 overflow-x-auto px-4 md:gap-5'
            ref={scrollContainerRef}
          >
            {trendingNowMovies.data?.results.map((movie, index) => (
              <div
                key={movie.id}
                onMouseEnter={() => handleMouseHover(movie.id)}
              >
                <MovieCard
                  id={movie.id}
                  poster_path={movie.poster_path}
                  title={movie.title}
                  vote_average={movie.vote_average}
                  showNumber={true}
                  index={index + 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { TrendingNow };
