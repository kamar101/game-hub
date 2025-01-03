import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function OrderByDropDown() {
  const options = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  return (
    <MenuRoot>
      <MenuTrigger>
        <Button variant="outline">
          Order by: Relevance <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {options.map((ordering) => (
          <MenuItem key={ordering.value} value={ordering.value}>
            {ordering.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
}

export default OrderByDropDown;
