import { NewRelease } from '@/features/home-page/components/new-release';
import { useNewRelease } from './hooks/use-new-release';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const HomePage = () => {
  const newReleaseQuery = useNewRelease({});

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && newReleaseQuery.hasNextPage) {
      newReleaseQuery.fetchNextPage();
    }
  }, [newReleaseQuery, inView]);

  if (newReleaseQuery.isLoading) {
    return (
      <div className='absolute top-1/2 left-1/2 text-center text-[16px] text-white'>
        Loading...
      </div>
    );
  }

  return (
    <div>
      <NewRelease newReleasedMovies={newReleaseQuery} />

      <div ref={ref} />

      {newReleaseQuery.isFetchingNextPage}
    </div>
  );
};

export { HomePage };
