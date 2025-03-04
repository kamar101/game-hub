import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DefinationItemProps {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinationItem = ({ term, children }: DefinationItemProps) => {
  return (
    <Box>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinationItem;
