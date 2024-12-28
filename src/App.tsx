import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameCard from "./components/GameCard";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "side-bar main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem gridArea="nav">
        <NavBar />
      </GridItem>
      <GridItem hideBelow="lg" gridArea="side-bar" background="red">
        Side Bar
      </GridItem>
      <GridItem gridArea="main">
        <GameCard />
      </GridItem>
    </Grid>
  );
}

export default App;
