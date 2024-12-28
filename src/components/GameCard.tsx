import { List } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

function GameCard() {
  const { data, error, loading } = useGames();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <List.Root>
      {data.map((game) => (
        <List.Item>{game.name}</List.Item>
      ))}
    </List.Root>
  );
}

export default GameCard;
