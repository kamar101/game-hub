import usePlatform from "./usePlatform";

const usePlatformId = (platformId: number) => {
  const { data } = usePlatform();
  return data.results.find((platform) => platform.id == platformId);
};

export default usePlatformId;
