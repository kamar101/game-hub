import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "@/hooks/usePlatform";
import usePlatformId from "@/hooks/usePlatformId";
import useGameQueryStore from "@/services/store";

function PlatformDropDown() {
  const { data } = usePlatforms();
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatformId(selectedPlatformId);

  return (
    <MenuRoot>
      <MenuTrigger>
        <Button variant="outline">
          {selectedPlatform?.name || "Platform"} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.results.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.slug}
            onClick={() => setSelectedPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
}

export default PlatformDropDown;
