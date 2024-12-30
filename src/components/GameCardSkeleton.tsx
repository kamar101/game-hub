import { Stack } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";

function GameCardSkeleton() {
  return (
    <Stack gap="6" maxW="xs">
      <Skeleton height="200px" />
      <SkeletonText noOfLines={2} />
    </Stack>
  );
}

export default GameCardSkeleton;
