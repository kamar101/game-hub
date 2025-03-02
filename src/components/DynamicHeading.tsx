import useGameQueryStore from "@/services/store";
import useGenreId from "@/hooks/useGenreId";
import usePlatformId from "@/hooks/usePlatformId";
import { Heading } from "@chakra-ui/react";

function DynamicHeading() {
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatformId(platformId);

  const genreId = useGameQueryStore((s) => s.gameQuery.genresId);
  const genres = useGenreId(genreId);

  const heading = `${platform?.name || ""} ${genres?.name || ""} Games`;
  return (
    <Heading as="h1" size="lg" paddingY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default DynamicHeading;
