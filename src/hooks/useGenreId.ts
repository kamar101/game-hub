import useGenres from "./useGenres";

const useGenreId = (genreId: number) => {
  const { data } = useGenres();
  return data.results.find((genre) => genre.id == genreId);
};

export default useGenreId;
