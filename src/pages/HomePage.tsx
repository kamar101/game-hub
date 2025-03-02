import DynamicHeading from "@/components/DynamicHeading";
import GameGrid from "@/components/GameGrid";
import GenresList from "@/components/GenresList";
import OrderByDropDown from "@/components/OrderByDropDown";
import PlatformDropDown from "@/components/PlatformDropDown";
import { Box, Flex, Grid, GridItem, HStack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"side-bar main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem hideBelow="lg" gridArea="side-bar" paddingX={5}>
        <GenresList />
      </GridItem>
      <GridItem gridArea="main">
        <Box padding={2}>
          <DynamicHeading />
          <Flex marginY={2}>
            <HStack>
              <PlatformDropDown />
              <OrderByDropDown />
            </HStack>
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
