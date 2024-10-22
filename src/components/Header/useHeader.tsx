"use client";
import { useState } from "react";
import { Item } from "./HeaderType";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState<Item[]>([]);

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
