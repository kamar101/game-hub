import { Card, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImage from "@/services/crop-image";
import PlatformIcons from "./PlatformIcons";

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <Card.Root>
      <Image src={getCroppedImage(game.background_image)} />
      <Card.Body>
        <PlatformIcons
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <Heading fontSize="2xl">{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
