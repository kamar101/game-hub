import genres from "@/data/genresList";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => {
  return { data: genres, error: null, loading: false };
};

export default useGenres;
