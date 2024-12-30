import { HStack, List, Spinner, Image, Heading } from "@chakra-ui/react";
import useGenres, { Genre } from "@/hooks/useGenres";
import cropImage from "@/services/crop-image";

function GenresList() {
  const { data, error, loading } = useGenres();
  if (loading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List.Root variant="plain">
        {data.map((genre) => (
          <List.Item key={genre.id}>
            <HStack key={genre.id} paddingY="5px">
              <Image
                src={cropImage(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit={"cover"}
              />
              {genre.name}
            </HStack>
          </List.Item>
        ))}
      </List.Root>
      );
    </>
  );
}

export default GenresList;
