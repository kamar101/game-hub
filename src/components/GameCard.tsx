import { Card, Heading, Image, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImage from "@/services/crop-image";
import PlatformIcons from "./PlatformIcons";
import CriticRating from "./CriticRating";

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <Card.Root>
      <Image src={getCroppedImage(game.background_image)} />
      <Card.Body>
        <HStack justify="space-between" marginBottom={2}>
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticRating score={game.metacritic} />
        </HStack>

        <Heading fontSize="2xl">{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
