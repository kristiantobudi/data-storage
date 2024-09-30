"use client";
import React from "react";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar";
import { useModal } from "@/components/Header/useHeader";

const Page: React.FC = () => {
  const { openModal } = useModal();
  return (
    <div>
      <h1>Inventory Stocks</h1>
      <Header title="Stocks" button_name="New Stock" openModal={openModal} />
      <SearchBar placeholder="Quick search..." isStockPage={true} />
    </div>
  );
};

export default Page;
