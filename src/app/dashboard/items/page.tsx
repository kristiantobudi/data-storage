"use client";

import { Suspense, useState } from "react";
import ItemTable from "@/components/Items";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar";
import AddItem from "@/components/Header/AddItem";
import { useModal } from "@/components/Header/useHeader";
import DefaultLayouts from "@/components/Layouts/DefaultLayouts";
import { useSearchParams, useRouter } from "next/navigation";

const ItemPage: React.FC = () => {
  const { addItem } = useModal();
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <DefaultLayouts>
      <div className="flex flex-col min-h-screen">
        <Header title="Items" button_name="Add Item" openModal={openModal} />
        <SearchBar
          placeholder="Search item name.."
          onSearch={handleSearch}
          onSortChange={handleSortChange}
        />
        <ItemTable searchQuery={searchQuery} sortOrder={sortOrder} />
        {isModalOpen && <AddItem closeModal={closeModal} addItem={addItem} />}
      </div>
    </DefaultLayouts>
  );
};

const SuspenseItemWrapper = () => {
  return (
    <>
      <Suspense>
        <ItemPage />
      </Suspense>
      ;
    </>
  );
};

export default SuspenseItemWrapper;
