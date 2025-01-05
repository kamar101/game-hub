import { GameQuery } from "@/App";
import useData from "./useData";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>(
    "/games",
    {
      params: {
        ordering: gameQuery.ordering,
        genres: gameQuery.genres?.slug,
        platforms: gameQuery.platform?.id,
        search: gameQuery.search,
      },
    },
    [gameQuery]
  );
};

export default useGames;
