"use client";
import React, { useState } from "react";
import ItemTable from "@/components/Items";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import AddItem from "@/components/AddItem";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddItemClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Inventory Items</h1>
      <Header
        title="Items"
        button_name="Add Item"
        onAddItemClick={handleAddItemClick}
      />
      <SearchBar placeholder="Search item ID.." isStockPage={false} />
      <ItemTable />
      {isModalOpen && <AddItem closeModal={closeModal} />}
    </div>
  );
};

export default Page;
