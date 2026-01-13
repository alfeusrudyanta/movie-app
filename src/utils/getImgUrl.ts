import bgWhite from '../../public/icon/bg-white.jpg';

const getImgUrl = (path: string | null): string => {
  if (!path) return bgWhite;
  return `https://image.tmdb.org/t/p/original/${path}`;
};

export { getImgUrl };
