import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "@/hooks/useGames";
import GameBox from "./GameBox";

function GameGrid() {
  const { data, error, loading } = useGames();
  return (
    <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} gap="30px" padding="10px">
      {data.map((game) => (
        <GameBox key={game.id}>
          <GameCard game={game} />
        </GameBox>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
