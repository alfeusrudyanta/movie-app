import { useParams } from 'react-router-dom';
import { useMovieDetails } from '@/domains/movie/hooks/use-movie-details';
import { useMovieCredits } from './hooks/use-movie-credits';
import { MovieDetails } from './components/movie-details';
import { MovieCredits } from './components/movie-credits';
import { SpinnerCustom } from '@/components/ui/spinner';
import { ServerErrorPage } from '@/components/errors';

const MoviePage = () => {
  const { id } = useParams<{ id: string }>();

  const detailQuery = useMovieDetails(Number(id));
  const creditQuery = useMovieCredits(Number(id));

  if (detailQuery.isError || creditQuery.isError) {
    return <ServerErrorPage />;
  }

  if (detailQuery.isLoading || creditQuery.isLoading) {
    return <SpinnerCustom />;
  }

  return (
    <div className='flex flex-col gap-6 md:gap-12'>
      <MovieDetails movieDetails={detailQuery} />
      <MovieCredits movieCredits={creditQuery} />
    </div>
  );
};

export { MoviePage };
