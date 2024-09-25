import React from "react";
import ItemTable from "@/components/Items";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

const Page = () => {
  return (
    <div>
      <h1>Inventory Items</h1>
      <Header title="Items" button_name="Add Item" />
      <SearchBar placeholder="Search item ID.." isStockPage={false} />
      <ItemTable />
    </div>
  );
};

export default Page;
