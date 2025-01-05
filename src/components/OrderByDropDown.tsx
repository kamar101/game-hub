import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface OrderByDropDownProps {
  selectedOrdering: string;
  onSelectedOrdering: (ordering: string) => void;
}

function OrderByDropDown({
  selectedOrdering,
  onSelectedOrdering,
}: OrderByDropDownProps) {
  const options = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const getSelectedOrderingLabel = options.find(
    (option) => option.value === selectedOrdering
  );

  return (
    <MenuRoot>
      <MenuTrigger>
        <Button variant="outline">
          Order by: {getSelectedOrderingLabel?.label || "Relevance"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {options.map((ordering) => (
          <MenuItem
            key={ordering.value}
            value={ordering.value}
            onClick={() => onSelectedOrdering(ordering.value)}
          >
            {ordering.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
}

export default OrderByDropDown;
