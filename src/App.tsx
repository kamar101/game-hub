import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
      <GridItem gridArea="main" background="green">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
