import platforms from "@/data/parentPlatforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  return { data: platforms, error: null, loading: false };
};

export default usePlatform;
