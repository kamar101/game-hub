import { Box, Flex, Grid, GridItem, HStack } from "@chakra-ui/react";
import DynamicHeading from "./components/DynamicHeading";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import OrderByDropDown from "./components/OrderByDropDown";
import PlatformDropDown from "./components/PlatformDropDown";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "side-bar main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem gridArea="nav">
        <NavBar />
      </GridItem>
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
}

export default App;
