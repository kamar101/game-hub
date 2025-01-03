import { Grid, GridItem, Heading, HStack, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import PlatformDropDown from "./components/PlatformDropDown";
import OrderByDropDown from "./components/OrderByDropDown";

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
        <Heading as="h1" size="lg" paddingY={5} fontSize="5xl">
          Games
        </Heading>
        <HStack>
          <PlatformDropDown />
          <OrderByDropDown />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
