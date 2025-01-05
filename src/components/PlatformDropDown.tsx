import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "@/hooks/usePlatform";

interface PlatformDropDownProps {
  selectedPlatform: Platform | null;
  onSelectedPlatform: (platform: Platform) => void;
}

function PlatformDropDown({
  selectedPlatform,
  onSelectedPlatform,
}: PlatformDropDownProps) {
  const { data} = usePlatforms();

  return (
    <MenuRoot>
      <MenuTrigger>
        <Button variant="outline">
          {selectedPlatform?.name || "Platform"} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((platform) => (
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
