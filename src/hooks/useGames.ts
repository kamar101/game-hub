import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
}

const useGames = () => {
  return useData<Game>("/games");
};

export default useGames;
