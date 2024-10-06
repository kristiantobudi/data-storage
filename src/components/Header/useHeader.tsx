"use client";
import { useState } from "react";
import { Item } from "./HeaderType";
import { useEffect } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState<Item[]>([]);

  const fetchItems = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/v1/items`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }
      const resData = await response.json();
      console.log("hasil data");
      console.log(resData);
      setItems(resData.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

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
