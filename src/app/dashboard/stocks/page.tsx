import React from "react";
import ItemTable from "@/components/Items";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

const Page = () => {
  return (
    <div>
      <h1>Inventory Stocks</h1>
      <Header title="Stocks" button_name="New Stock" />
      <SearchBar placeholder="Quick search..." isStockPage={true} />
      <ItemTable />
    </div>
  );
};

export default Page;
