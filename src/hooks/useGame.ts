import { Game } from "./useGames";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiclient = new ApiClient<Game>("/games");

const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiclient.get(slug),
  });
};

export default useGame;
