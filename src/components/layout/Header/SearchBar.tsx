import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useResponsiveToggle from '@/hooks/useResponsiveToggle';
import { ArrowLeft, Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { isMobile } = useResponsiveToggle();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  if (isMobile) {
    return (
      <div>
        <Search
          className='hover:text-primary-200 size-6 cursor-pointer text-neutral-500 transition-colors'
          onClick={() => setIsOpen((prev) => !prev)}
        />

        {isOpen && (
          <div className='fixed inset-0 bg-black'>
            <div className='h-full w-full bg-black'>
              <div className='flex h-16 flex-row items-center justify-between gap-2.5 px-4 py-2.5'>
                <ArrowLeft
                  className='hover:text-primary-200 size-6 cursor-pointer text-neutral-500 transition-colors'
                  onClick={() => setIsOpen(false)}
                />
                <div className='flex h-full w-full max-w-full items-center justify-between gap-4 rounded-2xl border border-[#252B37] px-4 py-2 backdrop-blur-3xl'>
                  <Search
                    className='hover:text-primary-200 size-6 cursor-pointer text-neutral-500 transition-colors'
                    onClick={handleSearch}
                  />
                  <input
                    type='text'
                    placeholder='Search Movie'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className='text-sm-regular text-neutral-25 h-full w-full max-w-full outline-none'
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className='flex h-full w-full max-w-60 items-center justify-between gap-4 rounded-2xl border border-neutral-800 bg-neutral-950/60 px-4 py-2 backdrop-blur-3xl'>
      <Search
        className='hover:text-primary-200 size-6 cursor-pointer text-neutral-500 transition-colors'
        onClick={handleSearch}
      />

      <input
        type='text'
        placeholder='Search Movie'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        className='text-md-regular text-neutral-25 h-full w-full outline-none'
      />
    </div>
  );
};

export { SearchBar };
