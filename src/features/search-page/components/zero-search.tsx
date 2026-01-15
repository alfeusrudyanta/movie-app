import movieSearchIcon from '/icon/movie-search.svg';

const ZeroSearch = () => {
  return (
    <div className='flex w-full flex-col items-center pt-33 md:pt-54'>
      <div className='flex flex-col items-center gap-3 md:gap-4'>
        <img
          src={movieSearchIcon}
          alt='movieSearchIcon'
          className='size-50'
          loading='lazy'
        />

        <div className='flex flex-col gap-2 text-center'>
          <p className='text-md-semibold text-white'>Data Not Found</p>
          <p className='text-sm-regular text-neutral-400'>Try other keywords</p>
        </div>
      </div>
    </div>
  );
};

export { ZeroSearch };
