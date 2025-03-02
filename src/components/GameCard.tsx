import { Card, Heading, Image, HStack } from "@chakra-ui/react";
import Game from "@/entities/Game";
import getCroppedImage from "@/services/crop-image";
import PlatformIcons from "./PlatformIcons";
import CriticRating from "./CriticRating";
import Emoji from "./Emoji";
import { Link } from "react-router";

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
            platforms={game?.parent_platforms.map((p) => p.platform)}
          />
          <CriticRating score={game.metacritic} />
        </HStack>

        <Heading fontSize="2xl">
          <Link to={`/games/${game.slug}`}>{game.name} </Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
