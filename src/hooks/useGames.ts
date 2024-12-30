import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: platform }[];
  metacritic: number;
}

export interface platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = () => {
  return useData<Game>("/games");
};

export default useGames;
