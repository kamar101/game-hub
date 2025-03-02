import { Box, Flex, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import PlatformDropDown from "./components/PlatformDropDown";
import OrderByDropDown from "./components/OrderByDropDown";
import { useState } from "react";
import { Platform } from "./hooks/usePlatform";
import { Genre } from "./hooks/useGenres";
import DynamicHeading from "./components/DynamicHeading";

export interface GameQuery {
  platformId: number;
  ordering: string;
  search?: string;
  genresId: number;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "side-bar main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem gridArea="nav">
        <NavBar
          onGameSearch={(search) =>
            setGameQuery({ ...gameQuery, search: search })
          }
        />
      </GridItem>
      <GridItem hideBelow="lg" gridArea="side-bar" paddingX={5}>
        <GenresList
          onSelectGenre={(genre) =>
            setGameQuery({ ...gameQuery, genresId: genre.id })
          }
          selectedGenreId={gameQuery.genresId}
        />
      </GridItem>
      <GridItem gridArea="main">
        <Box padding={2}>
          <DynamicHeading gameQuery={gameQuery} />
          <Flex marginY={2}>
            <HStack>
              <PlatformDropDown
                selectedPlatformId={gameQuery.platformId}
                onSelectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                }
              />
              <OrderByDropDown
                selectedOrdering={gameQuery.ordering}
                onSelectedOrdering={(order) =>
                  setGameQuery({ ...gameQuery, ordering: order })
                }
              />
            </HStack>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
