"use client";
import React from "react";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar";
import { useModal } from "@/components/Header/useHeader";
import DefaultLayouts from "@/components/Layouts/DefaultLayouts";
import Stock from "@/components/Stock/Stock";

const StockPage: React.FC = () => {
  const { openModal } = useModal();
  return (
    <DefaultLayouts>
      <div>
        <Header title="Stocks" button_name="New Stock" openModal={openModal} />
        <SearchBar placeholder="Quick search..." isStockPage={true} />
        <Stock />
      </div>
    </DefaultLayouts>
  );
};

export default StockPage;
