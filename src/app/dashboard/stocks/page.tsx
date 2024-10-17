"use client";
import { useState } from "react";
import React from "react";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar";
import { useModal } from "@/components/Header/useHeader";
import DefaultLayouts from "@/components/Layouts/DefaultLayouts";
import { useSearchParams, useRouter } from "next/navigation";

const StockPage: React.FC = () => {
  const { openModal } = useModal();

  const searchParams = useSearchParams();
  const router = useRouter();

  const searchQueryFromParams = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(searchQueryFromParams);
  const [sortOrder, setSortOrder] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    router.push(`?search=${encodeURIComponent(query)}`);
  };

  const handleSortChange = (order: string) => {
    setSortOrder(order);
  };

  return (
    <DefaultLayouts>
      <div>
        <Header title="Stocks" button_name="New Stock" openModal={openModal} />
        <SearchBar
          placeholder="Quick search..."
          onSearch={handleSearch}
          onSortChange={handleSortChange}
        />
      </div>
    </DefaultLayouts>
  );
};

export default StockPage;
