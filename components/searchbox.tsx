import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export const SearchBox = () => {
  return (
    <InputGroup className="h-auto rounded-3xl border-[#C5C3C6]! py-1 shadow-none ring-0!">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
};
