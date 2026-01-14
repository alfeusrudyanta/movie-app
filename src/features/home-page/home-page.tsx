import { NewRelease } from '@/features/home-page/components/new-release';
import { useNewRelease } from './hooks/use-new-release';
import { useTrendingMovies } from './hooks/use-trending-movies';
import { TrendingNow } from './components/trending-now';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const newReleaseQuery = useNewRelease({});
  const trendingNowQuery = useTrendingMovies();

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
    <div>
      <TrendingNow key={'trending-now'} trendingNowMovies={trendingNowQuery} />
      <NewRelease key={'new-release'} newReleasedMovies={newReleaseQuery} />

      {newReleaseQuery.isFetchingNextPage}
      <Button onClick={loadMore}>Load More</Button>
    </div>
  );
};

export { HomePage };
