"use client";
import { useState } from "react";
import { Item } from "./HeaderType";
import { DataItem } from "@/components/Header/constant";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState<Item[]>(DataItem);

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
