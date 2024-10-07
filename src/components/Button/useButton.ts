import { useState } from "react";

interface Item {
  item_id: string;
  item_name: string;
  sku: string;
  quantity: number;
  category: string;
  storage_location: string;
}

export const useButton = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleDelete = async (_id: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/v1/items/${_id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete item.");
      }
      setItems((prevItems) => prevItems.filter((item) => item.item_id !== _id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleUpdate = async (updatedItem: Item) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/v1/items/${updatedItem.item_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      });
      if (!response.ok) {
        throw new Error("Failed to update item.");
      }
      setItems((prevItems) =>
        prevItems.map((item) => (item.item_id === updatedItem.item_id ? updatedItem : item))
      );
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const toggleModal = (item: Item | null) => {
    setSelectedItem(item);
    setModal((prev) => !prev);
  };

  return { 
    handleDelete,
    handleUpdate,
    toggleModal,
    modal,
    selectedItem,
    items,
  };
};
