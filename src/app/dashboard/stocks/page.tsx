import React from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

const Page = () => {
  return (
    <div>
      <h1>Inventory Stocks</h1>
      <Header title="Stocks" button_name="New Stock" onClick={() => {}} />
      <SearchBar placeholder="Quick search..." isStockPage={true} />
    </div>
  );
};

export default Page;
