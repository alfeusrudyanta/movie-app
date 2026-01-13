import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type {
  HeaderProps,
  NavItem,
} from '@/components/layout/header/header.types';
import { cn } from '@/libs/utils';
import { ToggleMenu } from '@/components/layout/header/toggle-menu';
import { SearchBar } from '@/components/layout/header/search-bar';

const Header: React.FC<HeaderProps> = ({ navItem }) => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollCheck = window.scrollY > 0;
      if (scrollCheck !== isScrolling) {
        setIsScrolling(scrollCheck);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolling]);

  return (
    <header
      className={cn(
        'md:px-11xl fixed top-0 z-100 flex h-16 w-full items-center justify-between px-4 transition-all duration-300 md:h-22.5',
        isScrolling ? 'bg-neutral-950/60 backdrop-blur-2xl' : 'bg-transparent'
      )}
    >
      <div className='flex flex-row items-center justify-center gap-20'>
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

        <nav className='text-md-regular mr-12 hidden items-center gap-12 md:flex'>
          {navItem.map((item: NavItem) => (
            <a
              className='hover:text-primary-200 text-white transition-colors text-shadow-[0_0_4px_black]'
              key={item.label}
              href={item.path}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className='flex flex-row items-center justify-center gap-6'>
        <SearchBar />
        <ToggleMenu navItem={navItem} />
      </div>
    </header>
  );
};

export { Header };
