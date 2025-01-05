import { Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "./ui/input-group";
import { useRef } from "react";

interface SearchBarProps {
  onSearch: (search: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef.current) {
          onSearch(searchRef.current.value);
        }
      }}
    >
      <InputGroup width="100%" startElement={<LuSearch />}>
        <Input
          ref={searchRef}
          borderRadius={20}
          variant="subtle"
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  );
}

export default SearchBar;
