import React from "react";

const ItemHeader: React.FC = () => {
  return (
    <div className="p-4 bg-white text-purple-950 flex flex-row justify-between">
      <h2 className="text-2xl font-bold">Items</h2>
      <button className="bg-purple-800 text-white rounded p-2 transition-all hover:bg-purple-400 hover:text-indigo-950">
        + | Add Item
      </button>
    </div>
  );
};

export default ItemHeader;
