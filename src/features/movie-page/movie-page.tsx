import { useParams } from 'react-router-dom';
import { useMovieDetails } from '@/domains/movie/hooks/use-movie-details';
import { useMovieCredits } from './hooks/use-movie-credits';
import { MovieDetails } from './components/movie-details';
import { MovieCredits } from './components/movie-credits';

const MoviePage = () => {
  const { id } = useParams<{ id: string }>();

  const detailQuery = useMovieDetails(Number(id));
  const creditQuery = useMovieCredits(Number(id));

  if (detailQuery.isLoading || creditQuery.isLoading) {
    return (
      <div className='absolute top-1/2 left-1/2 text-center text-[16px] text-white'>
        Loading...
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-6 md:gap-12'>
      <MovieDetails movieDetails={detailQuery} />
      <MovieCredits movieCredits={creditQuery} />
    </div>
  );
};

export { MoviePage };
