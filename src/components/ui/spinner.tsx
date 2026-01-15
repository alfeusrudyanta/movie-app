import { Loader2Icon } from 'lucide-react';
import { cn } from '@/libs/utils';

function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <Loader2Icon
      role='status'
      aria-label='Loading'
      className={cn('size-18 animate-spin text-white md:size-20', className)}
      {...props}
    />
  );
}

function SpinnerCustom({ className }: React.ComponentProps<'svg'>) {
  return (
    <div className='flex min-h-screen w-full'>
      <div className='flex w-full grow items-center justify-center'>
        <Spinner className={className} />
      </div>
    </div>
  );
}

export { Spinner, SpinnerCustom };
