import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';

function ServerErrorPage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-black p-4'>
      <div className='flex flex-col'>
        <div className='mb-6 inline-flex items-center justify-center rounded-full bg-red-500/10 p-4'>
          <AlertCircle className='size-12 text-red-400' />
        </div>

        <h1 className='mb-3 text-2xl font-semibold text-white'>Oops!</h1>

        <p className='mb-8 text-gray-300'>
          Something went wrong. Please try again later.
        </p>

        <div className='flex items-center gap-3 md:gap-4'>
          <Button
            className='w-50 md:w-55'
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>

          <Link to='/'>
            <Button className='w-50 border border-neutral-900 bg-neutral-950/60 transition-colors hover:bg-neutral-950 md:w-55'>
              Go to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { ServerErrorPage };
