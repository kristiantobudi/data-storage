"use client";

import DefaultLayouts from "@/components/Layouts/DefaultLayouts";
import SearchBar from "@/components/SearchBar";
import Supplier from "@/components/Supplier/Supplier";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import Headers from "@/components/Header/Header";
import { useModal } from "@/components/Header/useHeader";
import { AddSupplier } from "@/components/Supplier/addSupplier";

const Suppliers: React.FC = () => {
  const { addSupplier } = useModal();
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
      <Headers
        title="Suppliers"
        button_name="New Supplier"
        openModal={openModal}
      />
      <SearchBar
        placeholder="Quick search..."
        onSearch={handleSearch}
        onSortChange={handleSortChange}
      />
      <Supplier searchQuery={searchQuery} sortOrder={sortOrder} />
      {isModalOpen && (
        <AddSupplier
          closeModal={closeModal} // Changed from onClose to closeModal
          addSupplier={addSupplier} // This matches the prop name in AddSupplier
        />
      )}
    </DefaultLayouts>
  );
};

const SuspenseSupplierWrapper: React.FC = () => {
  return (
    <Suspense>
      <Suppliers />
    </Suspense>
  );
};

export default SuspenseSupplierWrapper;
