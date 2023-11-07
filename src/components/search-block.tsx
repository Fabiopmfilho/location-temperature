import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface SearchBlockProps {
  inputValue: string;
  handleSearch: () => void;
  setInput: (value: string) => void;
  placeholder: string;
}

const SearchBlock = ({
  inputValue: cityInput,
  handleSearch,
  setInput: setInput,
  placeholder
}: SearchBlockProps) => {

  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center gap-2 mb-3 mt-3 lg:w-96">
        <Input
          type="text"
          placeholder={placeholder}
          value={cityInput}
          onChange={(e) => setInput(e.target.value)}
          className="bg-white"
        />
        <Button
          onClick={handleSearch}
          className="rounded-full w-14 h-14"
        >
          <SearchIcon size={24} />
        </Button>
      </div>
    </div>
  );
};

export default SearchBlock;
