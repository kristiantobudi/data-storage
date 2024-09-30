import React from "react";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar";
import { HeaderProps } from "@/components/Header/HeaderType";

const Page: React.FC<HeaderProps> = ({ title, button_name, openModal }) => {
  return (
    <div>
      <h1>Inventory Stocks</h1>
      <Header title="Stocks" button_name="New Stock" openModal={openModal} />
      <SearchBar placeholder="Quick search..." isStockPage={true} />
    </div>
  );
};

export default Page;
