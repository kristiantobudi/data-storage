"use client";

import { Suspense, useState } from "react";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar";
import AddStorage from "@/components/Header/AddStorage";
import { useModal } from "@/components/Header/useHeader";
import DefaultLayouts from "@/components/Layouts/DefaultLayouts";
import { useSearchParams, useRouter } from "next/navigation";
import StorageTable from "@/components/Storage/Storage";

const StoragePage: React.FC = () => {
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
        <Header
          title="Storage"
          button_name="Add Storage"
          openModal={openModal}
        />
        <SearchBar
          placeholder="Search storage name.."
          onSearch={handleSearch}
          onSortChange={handleSortChange}
        />
        <StorageTable searchQuery={searchQuery} sortOrder={sortOrder} />
        {isModalOpen && (
          <AddStorage closeModal={closeModal} addItem={addItem} />
        )}
      </div>
    </DefaultLayouts>
  );
};

const SuspenseStorageWrapper = () => {
  return (
    <>
      <Suspense>
        <StoragePage />
      </Suspense>
      ;
    </>
  );
};

export default SuspenseStorageWrapper;
