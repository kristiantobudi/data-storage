"use client";
import { useState } from "react";
import ItemTable from "@/components/Items";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar";
import AddItem from "@/components/Header/AddItem";
import { useModal } from "@/components/Header/useHeader";
import DefaultLayouts from "@/components/Layouts/DefaultLayouts";
import { useSearchParams, useRouter } from "next/navigation";

const ItemPage: React.FC = () => {
  const { addItem, isModalOpen, closeModal, openModal } = useModal();
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchQueryFromParams = searchParams.get("search") || "";

  const [searchQuery, setSearchQuery] = useState(searchQueryFromParams);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    router.push(`?search=${encodeURIComponent(query)}`);
  };

  return (
    <DefaultLayouts>
      <div className="flex flex-col min-h-screen">
        <Header title="Items" button_name="Add Item" openModal={openModal} />
        <SearchBar
          placeholder="Search item ID.."
          onSearch={handleSearch}
          isStockPage={false}
        />
        <ItemTable searchQuery={searchQuery} />
        {isModalOpen && <AddItem closeModal={closeModal} addItem={addItem} />}
      </div>
    </DefaultLayouts>
  );
};

export default ItemPage;
