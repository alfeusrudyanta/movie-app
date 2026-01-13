import type { UseQueryResult } from '@tanstack/react-query';

type CastMember = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  order: number;
};

type CrewMember = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
};

type MovieCredits = {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
};

type MovieCreditsProps = {
  movieCredits: UseQueryResult<MovieCredits, Error>;
};

export type { MovieCredits, MovieCreditsProps };
