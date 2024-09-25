import React from "react";
import ItemTable from "@/components/Items";
import Header from "@/components/Header";
import ItemSearchBar from "@/components/ItemSearchBar";

const Page = () => {
  return (
    <div>
      <h1>Inventory Items</h1>
      <Header title="Items" button_name="Add Item" />
      <ItemSearchBar />
      <ItemTable />
    </div>
  );
};

export default Page;
