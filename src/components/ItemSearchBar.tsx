import React from "react";

const ItemSearchBar: React.FC = () => {
  return (
    <div className="p-4 bg-white text-purple-950 flex flex-row justify-between">
      <input
        placeholder="Search item id..."
        className="w-1/3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <div className="flex flex-row space-x-2">
        <button className="px-8 bg-white text-purple-800 border-purple-800 rounded p-2 transition-all hover:bg-purple-400 hover:text-white">
          Status
        </button>
        <button className="px-8 bg-white text-purple-800 border-purple-800 rounded p-2 transition-all hover:bg-purple-400 hover:text-white">
          Sales
        </button>
        <button className="px-8 bg-white text-purple-800 border-purple-800 rounded p-2 transition-all hover:bg-purple-400 hover:text-white">
          Filter
        </button>
      </div>
    </div>
  );
};

export default ItemSearchBar;
