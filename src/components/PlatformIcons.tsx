import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "@/hooks/usePlatform";
import { HStack, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PlatformIconsProps {
  platforms: Platform[];
}

function PlatformIcons({ platforms }: PlatformIconsProps) {
  const platformIconMap: { [key: string]: ReactNode } = {
    pc: <FaWindows />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    mac: <FaApple />,
    linux: <FaLinux />,
    android: <FaAndroid />,
    nintendo: <SiNintendo />,
    web: <BsGlobe />,
    ios: <MdPhoneIphone />,
  };

  return (
    <HStack marginY={1}>
      {platforms.map(
        (platform) =>
          platformIconMap[platform.slug] && (
            <Icon key={platform.id} color="gray.500">
              {platformIconMap[platform.slug]}
            </Icon>
          )
      )}
    </HStack>
  );
}

export default PlatformIcons;
