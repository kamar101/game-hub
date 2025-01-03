import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import PlatformDropDown from "./components/PlatformDropDown";

function App() {
  {
  }
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
        <PlatformDropDown />
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
