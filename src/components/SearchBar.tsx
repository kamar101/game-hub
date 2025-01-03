import { Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "./ui/input-group";

function SearchBar() {
  return (
    <InputGroup width="100%" startElement={<LuSearch />}>
      <Input borderRadius={20} variant="subtle" placeholder="Search games..." />
    </InputGroup>
  );
}

export default SearchBar;
