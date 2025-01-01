import { useState } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search repositories..."
        value={searchTerm}
        onChange={handleInputChange}
        className="border border-gray-300 p-3 rounded-lg w-full shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
      />
    </div>
  );
};

export default SearchBar;
