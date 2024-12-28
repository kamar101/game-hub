import { Box } from "@chakra-ui/react";

interface GameBoxProps {
  children: React.ReactNode;
}

function GameBox({ children }: GameBoxProps) {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}

export default GameBox;
