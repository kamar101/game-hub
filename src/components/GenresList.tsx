import { HStack, List, Image, Heading } from "@chakra-ui/react";
import useGenres from "@/hooks/useGenres";
import cropImage from "@/services/crop-image";
import { Button } from "./ui/button";
import useGameQueryStore from "@/services/store";

function GenresList() {
  const { data } = useGenres();
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenresId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genresId);
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List.Root variant="plain">
        {data.results.map((genre) => (
          <List.Item key={genre.id}>
            <HStack key={genre.id} paddingY="5px">
              <Image
                src={cropImage(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit={"cover"}
              />
              <Button
                variant="ghost"
                fontSize="lg"
                maxWidth={"100%"}
                textAlign={"left"}
                whiteSpace={"normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
}

export default GenresList;
