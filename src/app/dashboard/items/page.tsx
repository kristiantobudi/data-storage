"use client";
import React, { useState } from "react";
import ItemTable from "@/components/Items";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import AddItem from "@/components/AddItem";

const Page: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [items, setItems] = useState([
    {
      item_id: 1,
      item_name: "Product A",
      description: "Description of Product A",
      sku: "SKU001",
      qty: 100,
      category_id: 101,
    },
    {
      item_id: 2,
      item_name: "Product B",
      description: "Description of Product B",
      sku: "SKU002",
      qty: 150,
      category_id: 102,
    },
    {
      item_id: 3,
      item_name: "Product C",
      description: "Description of Product C",
      sku: "SKU003",
      qty: 200,
      category_id: 103,
    },
  ]);

  const [lastItemId, setLastItemId] = useState(3); // Initial item_id set to 3 (the last existing ID)

  const addItem = (newItem: any) => {
    const newItemWithId = { ...newItem, item_id: lastItemId + 1 };
    setItems((prevItems) => [...prevItems, newItemWithId]);
    setLastItemId(lastItemId + 1);
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
        onClick={() => setIsModalOpen(true)}
      />
      <SearchBar placeholder="Search item ID.." isStockPage={false} />
      <ItemTable items={items} />
      {isModalOpen && <AddItem closeModal={closeModal} addItem={addItem} />}
    </div>
  );
};

export default Page;
