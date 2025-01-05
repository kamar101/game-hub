import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface DynamicHeadingProps {
  gameQuery: GameQuery;
}

function DynamicHeading({ gameQuery }: DynamicHeadingProps) {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genres?.name || ""
  } Games`;
  return (
    <Heading as="h1" size="lg" paddingY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default DynamicHeading;
