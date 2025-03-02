import ScreenShot from "@/entities/ScreenShot";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useScreenShots = (gameId: number) => {
  const apiclient = new ApiClient<ScreenShot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshot", gameId],
    queryFn: apiclient.getAll,
  });
};

export default useScreenShots;
