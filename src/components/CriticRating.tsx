import { Badge } from "@chakra-ui/react";

interface CriticRatingProps {
  score: number;
}

function CriticRating({ score }: CriticRatingProps) {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorPalette={color}>
      {score}
    </Badge>
  );
}

export default CriticRating;
