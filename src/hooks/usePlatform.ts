import platforms from "@/data/parentPlatforms";
import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatform = () => {
  return useQuery({
    queryKey: ["platfomrs"],
    queryFn: apiClient.getAll,
    staleTime: ms("24hr"),
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatform;
