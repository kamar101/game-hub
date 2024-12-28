import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "side-bar main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem gridArea="nav" background="yellow">
        Nav
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
