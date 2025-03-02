import logo from "../assets/logo.webp";
import { HStack, Image } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import SearchBar from "./SearchBar";
import { Link } from "react-router";

function NavBar() {
  return (
    <HStack justify="space-between">
      <Link to="/">
        <Image src={logo} boxSize={20} />
      </Link>

      <SearchBar />
      <ColorModeButton />
    </HStack>
  );
}

export default NavBar;
