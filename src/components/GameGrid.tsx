import useGames from "@/hooks/useGames";
import useGameQueryStore from "@/services/store";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameBox from "./GameBox";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery);
  const numberOfSkeletons = 12;
  const skeletonArray = Array.from(
    { length: numberOfSkeletons },
    (_, i) => i + 1
  );

  const fetchedGamesCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  if (error) return <div>Error: {error.message}</div>;
  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="30px" padding="10px">
        {isLoading && skeletonArray.map((i) => <GameCardSkeleton key={i} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameBox key={game.id}>
                <GameCard game={game} />
              </GameBox>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
}

export default GameGrid;
