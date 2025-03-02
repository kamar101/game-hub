import { Box } from "@chakra-ui/react";

interface GameBoxProps {
  children: React.ReactNode;
}

function GameBox({ children }: GameBoxProps) {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .20s ease-in",
      }}
    >
      {children}
    </Box>
  );
}

export default GameBox;
