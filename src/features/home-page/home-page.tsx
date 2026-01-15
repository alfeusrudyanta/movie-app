import { NewRelease } from '@/features/home-page/components/new-release';
import { useNewRelease } from './hooks/use-new-release';
import { useTrendingMovies } from './hooks/use-trending-movies';
import { TrendingNow } from './components/trending-now';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const HomePage = () => {
  const newReleaseQuery = useNewRelease({});
  const trendingNowQuery = useTrendingMovies();

  const { ref, inView } = useInView({ threshold: 0.8 });

  useEffect(() => {
    if (inView && newReleaseQuery.hasNextPage) {
      newReleaseQuery.fetchNextPage();
    }
  }, [newReleaseQuery, inView]);

  const loadMore = () => {
    if (newReleaseQuery.hasNextPage) {
      newReleaseQuery.fetchNextPage();
    }
  };

  if (newReleaseQuery.isLoading || trendingNowQuery.isLoading) {
    return (
      <div className='absolute top-1/2 left-1/2 text-center text-[16px] text-white'>
        Loading...
      </div>
    );
  }

  return (
    <div className='relative'>
      <TrendingNow key={'trending-now'} trendingNowMovies={trendingNowQuery} />
      <NewRelease key={'new-release'} newReleasedMovies={newReleaseQuery} />

      {newReleaseQuery.hasNextPage && (
        <div
          ref={ref}
          className='absolute bottom-0 flex h-96.5 w-full items-center justify-center bg-linear-to-b from-transparent to-black md:h-124'
        >
          <Button
            onClick={loadMore}
            className='border border-neutral-900 bg-neutral-950/60 transition-colors hover:bg-neutral-950 md:w-50'
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export { HomePage };
