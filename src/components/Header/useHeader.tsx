import { useState } from "react";
import { Item } from "./HeaderType";

export const useModal = () => {
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

  const addItem = (newItem: Item) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return {
    addItem,
    isModalOpen,
    setIsModalOpen,
    items,
    closeModal,
    openModal,
  };
};
