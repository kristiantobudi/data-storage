"use client";
import React, { useRef } from "react";
import { IoMdSearch } from "react-icons/io";

interface SearchProps {
  placeholder: string;
  onSearch: (query: string) => void;
  onSortChange: (sortOrder: string) => void;
}

const SearchBar: React.FC<SearchProps> = ({
  placeholder,
  onSearch,
  onSortChange,
}) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const handleSearch = () => {
  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchRef.current) {
      const keyword = searchRef.current.value;
      if (!keyword || keyword.trim() === "") {
        onSearch("");
        return;
      }
      onSearch(keyword);
    }
  };

  const handleKeyPress = () => {
    handleSearch();
  const handleKeyPress = (event: any) => {
    handleSearch(event);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortOrder = event.target.value;
    onSortChange(sortOrder);
  };

  return (
    <div className="py-4 px-8 bg-white text-purple-950 flex flex-row justify-between border border-gray-200">
      <div className="relative w-1/3 py-2">
        <IoMdSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 text-purple-800" />
        <input
          ref={searchRef}
          placeholder={placeholder}
          className="w-full pl-10 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          onChange={handleKeyPress}
        />
      </div>
      <div className="flex flex-row space-x-2 gap-2">
        <select
          className="px-4 py-2 bg-white text-purple-800 border-purple-800 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          onChange={handleSortChange}
        >
          <option value="">Sort by</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
