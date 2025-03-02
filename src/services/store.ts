import { create } from "zustand";

export interface GameQuery {
  platformId?: number;
  ordering?: string;
  search?: string;
  genresId?: number;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenresId: (genreId: number) => void;
  setOrdering: (ordering: string) => void;
  setSearch: (searchText: string) => void;
  setPlatformId: (platformId: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenresId: (genresId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genresId } })),
  setOrdering: (ordering) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, ordering } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSearch: (search) => set(() => ({ gameQuery: { search } })),
}));

export default useGameQueryStore;
