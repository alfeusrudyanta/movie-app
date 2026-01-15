import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className='toaster group'
      toastOptions={{
        className:
          'md:mt-28.5! mt-20! backdrop-blur-2xl md:text-md-medium! text-sm-medium! text-white! max-w-132.75! w-full! h-13! bg-black/20! px-4! rounded-2xl! flex! justify-center! gap-2!',
        style: {
          background: 'rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      }}
      icons={{
        success: <CircleCheckIcon className='size-6' />,
        info: <InfoIcon className='size-6' />,
        warning: <TriangleAlertIcon className='size-6' />,
        error: <OctagonXIcon className='size-6' />,
        loading: <Loader2Icon className='size-6 animate-spin' />,
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          '--border-radius': 'var(--radius)',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
