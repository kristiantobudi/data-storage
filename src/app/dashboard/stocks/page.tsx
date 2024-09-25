import React from "react";
import ItemTable from "@/components/Items";
import Header from "@/components/Header";
import ItemSearchBar from "@/components/ItemSearchBar";

const Page = () => {
  return (
    <div>
      <h1>Inventory Stocks</h1>
      <Header title="Stocks" />
      <ItemSearchBar />
      <ItemTable />
    </div>
  );
};

export default Page;
