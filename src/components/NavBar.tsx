import logo from "../assets/logo.webp";
import { HStack, Image } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import SearchBar from "./SearchBar";

interface NavBarProps {
  onGameSearch: (search: string) => void;
}

function NavBar({ onGameSearch }: NavBarProps) {
  return (
    <HStack justify="space-between">
      <Image src={logo} boxSize={20} />
      <SearchBar onSearch={onGameSearch} />
      <ColorModeButton />
    </HStack>
  );
}

export default NavBar;
