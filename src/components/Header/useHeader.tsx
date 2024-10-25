"use client";
import { useState } from "react";
import { Item } from "./HeaderType";

export const useModal = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (newItem: Item) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return {
    addItem,
    items,
  };
};
