import logo from "../assets/logo.webp";
import { HStack, Image } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <HStack justify="space-between">
      <Image src={logo} boxSize={20} />
      <SearchBar />
      <ColorModeButton />
    </HStack>
  );
}

export default NavBar;
