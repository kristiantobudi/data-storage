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

 // Fungsi untuk mengirim permintaan DELETE
  const handleDelete = async (_id: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/v1/items/${_id}`, {
        method: "DELETE",
      });
      console.log(response)
      if (!response.ok) {
        throw new Error("Failed to delete item.");
      }

      // Update state jika berhasil
      setItems((prevItems) => prevItems.filter((item) => item.item_id !== _id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
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
