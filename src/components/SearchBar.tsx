import { Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "./ui/input-group";
import { useRef } from "react";
import useGameQueryStore from "@/services/store";
import { useNavigate } from "react-router";

function SearchBar() {
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);
  const setSearch = useGameQueryStore((s) => s.setSearch);
  return (
    <form
      className="search-bar"
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef.current) {
          setSearch(searchRef.current.value);
          navigate("/");
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
