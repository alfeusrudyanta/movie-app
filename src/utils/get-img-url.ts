import BgWhite from '/icon/bg-white.jpg';

const getImgUrl = (path: string | null): string => {
  if (!path) return BgWhite;
  return `https://image.tmdb.org/t/p/original/${path}`;
};

export { getImgUrl };
