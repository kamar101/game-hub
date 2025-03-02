import useScreenShots from "@/hooks/useScreenShots";
import { SimpleGrid, Image } from "@chakra-ui/react";

interface GameScreenShotsProps {
  gameId: number;
}

const GameScreenShots = ({ gameId }: GameScreenShotsProps) => {
  const { data, error, isLoading } = useScreenShots(gameId);

  if (error) throw error;
  if (isLoading) return null;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} gap={3}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
