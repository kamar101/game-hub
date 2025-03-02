import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "@/hooks/usePlatform";
import usePlatformId from "@/hooks/usePlatformId";

interface PlatformDropDownProps {
  selectedPlatformId: number;
  onSelectedPlatform: (platform: Platform) => void;
}

function PlatformDropDown({
  selectedPlatformId,
  onSelectedPlatform,
}: PlatformDropDownProps) {
  const { data } = usePlatforms();

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
            onClick={() => onSelectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
}

export default PlatformDropDown;
