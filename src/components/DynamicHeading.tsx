import { GameQuery } from "@/App";
import useGenreId from "@/hooks/useGenreId";
import usePlatformId from "@/hooks/usePlatformId";
import { Heading } from "@chakra-ui/react";

interface DynamicHeadingProps {
  gameQuery: GameQuery;
}

function DynamicHeading({ gameQuery }: DynamicHeadingProps) {
  const platform = usePlatformId(gameQuery.platformId);
  const genres = useGenreId(gameQuery.genresId);
  const heading = `${platform?.name || ""} ${genres?.name || ""} Games`;
  return (
    <Heading as="h1" size="lg" paddingY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default DynamicHeading;
