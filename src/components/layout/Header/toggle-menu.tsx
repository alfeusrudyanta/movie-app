import type {
  HeaderProps,
  NavItem,
} from '@/components/layout/header/header.types';
import useResponsiveToggle from '@/hooks/use-responsive-toggle';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const ToggleMenu: React.FC<HeaderProps> = ({ navItem }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { isMobile } = useResponsiveToggle();

  if (isMobile) {
    return (
      <div className='flex items-center justify-center'>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className='cursor-pointer'
        >
          <Menu className='hover:text-primary-200 size-6 text-white transition-colors' />
        </button>

        {isOpen && (
          <div className='fixed inset-0 z-50 min-h-screen overflow-hidden bg-black'>
            <div className='h-full w-full'>
              <div className='flex h-16 items-center justify-between px-4'>
                <Link to='/'>
                  <div className='flex gap-1'>
                    <img
                      src='/icon/movie-icon.svg'
                      alt='icon-tv'
                      className='size-7 md:size-10'
                    />
                    <p className='text-neutral-25 text-xl-semibold md:display-sm-semibold md:pt-[0.25rem]'>
                      Movie
                    </p>
                  </div>
                </Link>

                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className='cursor-pointer'
                >
                  <X className='hover:text-primary-200 size-6 text-white transition-colors' />
                </button>
              </div>

              <div className='mx-4 flex h-full flex-col pt-6'>
                <nav className='text-md-regular hover:text-primary-200 flex flex-col gap-4 text-white transition-colors'>
                  {navItem.map((item: NavItem) => (
                    <a key={item.label} href={item.path}>
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export { ToggleMenu };
