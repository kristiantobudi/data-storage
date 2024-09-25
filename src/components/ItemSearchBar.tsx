import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

const ItemSearchBar: React.FC = () => {
  return (
    <div className="p-4 bg-white text-purple-950 flex flex-row justify-between">
       <div className="relative w-1/3 py-2">
        <IoMdSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 text-purple-800" />
        <input
          placeholder="Search item id..."
          className="w-full pl-10 pr-2 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div className="flex flex-row space-x-2 gap-2">
        <div className="px-2 py-2 border-purple-800 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition-al justify-center items-center">
          <MdOutlineDateRange className="w-8 h-8"/>
        </div>
        <select className="px-4 py-2 bg-white text-purple-800 border-purple-800 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all">
          <option value="">Sales</option>
          <option value="">Sales1</option>
          <option value="">Sales2</option>
        </select>
        <select className="px-4 py-2 bg-white text-purple-800 border-purple-800 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all">
          <option value="">Status</option>
          <option value="">Status1</option>
          <option value="">Status2</option>
        </select>
        <select className="px-4 py-2 bg-white text-purple-800 border-purple-800 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all">
          <option value="">Filter</option>
          <option value="">Filter1</option>
          <option value="">Filter2</option>
        </select>
      </div>
    </div>
  );
};

export default ItemSearchBar;
