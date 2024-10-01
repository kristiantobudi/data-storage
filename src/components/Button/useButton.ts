import { useState } from "react";

interface Item {
  item_id: number;
  item_name: string;
  description: string;
  sku: string;
  qty: number;
  category_id: number;
}

export const useButton = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleDelete = (item_id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.item_id !== item_id));
    setModal(false); 
  };

  const toggleModal = (item: Item | null) => {
    setSelectedItem(item);
    setModal((prev) => !prev);
  };

  return { 
    handleDelete,
    toggleModal,
    modal,
    selectedItem,
    items,
  };
};
