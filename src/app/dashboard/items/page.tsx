import React from "react";
import ItemTable from "@/components/Items";
import ItemHeader from "@/components/ItemHeader";
import ItemSearchBar from "@/components/ItemSearchBar";

const Page = () => {
  return (
    <div>
      <h1>Inventory Items</h1>
      <ItemHeader />
      <ItemSearchBar />
      <ItemTable />
    </div>
  );
};

export default Page;
