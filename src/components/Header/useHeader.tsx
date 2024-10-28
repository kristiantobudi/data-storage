"use client";
import { useState } from "react";
import { Item } from "./HeaderType";
import { SupplierType } from "../Supplier/SupplierType";

export const useModal = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [supplier, setSupplier] = useState<SupplierType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addItem = (newItem: Item) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const addSupplier = (newSupplier: SupplierType) => {
    setSupplier((prevSupplier) => [...prevSupplier, newSupplier]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return {
    addItem,
    items,
    isModalOpen,
    openModal,
    supplier,
    addSupplier,
  };
};
