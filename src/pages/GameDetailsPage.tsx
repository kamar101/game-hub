import ExpandableText from "@/components/ExpandableText";
import useGame from "@/hooks/useGame";
import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return <ExpandableText>{game.description_raw}</ExpandableText>;
};

export default GameDetailsPage;
