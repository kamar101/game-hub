import { Grid, GridItem, Heading, HStack, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import PlatformDropDown from "./components/PlatformDropDown";
import OrderByDropDown from "./components/OrderByDropDown";
import { useState } from "react";
import { Platform } from "./hooks/usePlatform";
import { Genre } from "./hooks/useGenres";

export interface GameQuery {
  platform: Platform | null;
  ordering: string;
  search?: string;
  genres?: Genre;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <PlatformDropDown
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform: platform })
            }
          />
          <OrderByDropDown
            selectedOrdering={gameQuery.ordering}
            onSelectedOrdering={(order) =>
              setGameQuery({ ...gameQuery, ordering: order })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
