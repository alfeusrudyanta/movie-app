type Genre = {
  id: number;
  name: string;
};

type MovieActionsAndStatsProps = {
  vote_average: number;
  genres?: Genre[];
  adult: boolean;
  id: number;
};

export type { MovieActionsAndStatsProps };
