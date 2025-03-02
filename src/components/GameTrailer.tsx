import useTrailers from "@/hooks/useTrailers";

interface GameTrailerProps {
  gameId: number;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {
  const { data, error, isLoading } = useTrailers(gameId);

  const first = data?.results[0];

  if (isLoading) return null;
  if (error) throw error;

  return first ? (
    <video
      title={first.name}
      src={first?.data[480]}
      poster={first.preview}
      controls
    ></video>
  ) : null;
};

export default GameTrailer;
