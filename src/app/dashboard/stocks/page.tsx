import React from "react";
import ItemTable from "@/components/Items";
import Header from "@/components/Header";
import ItemSearchBar from "@/components/ItemSearchBar";

const Page = () => {
  return (
    <div>
      <h1>Inventory Stocks</h1>
      <Header title="Stocks" button_name="New Stock" />
      <ItemSearchBar />
      <ItemTable />
    </div>
  );
};

export default Page;
