import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "@/hooks/useGames";
import GameBox from "./GameBox";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "@/App";

interface GameGridProps {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: GameGridProps) {
  const { data, error, loading } = useGames(gameQuery);
  const numberOfSkeletons = 12;
  const skeletonArray = Array.from(
    { length: numberOfSkeletons },
    (_, i) => i + 1
  );
  if (error) return <div>Error: {error}</div>;
  return (
    <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} gap="30px" padding="10px">
      {loading && skeletonArray.map((i) => <GameCardSkeleton key={i} />)}
      {data.map((game) => (
        <GameBox key={game.id}>
          <GameCard game={game} />
        </GameBox>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
