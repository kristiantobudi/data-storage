"use client";
import React, { useState } from "react";

interface Item {
  item_id: string;
  item_name: string;
  sku: string;
  quantity: number;
  category: string;
  storage_location: string;
}

interface AddItemProps {
  closeModal: () => void;
  addItem: (newItem: Item) => void;
}

const AddItem: React.FC<AddItemProps> = ({ closeModal, addItem }) => {
  const [itemId, setItemId] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemSKU, setItemSKU] = useState("");
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemCategory, setItemCategory] = useState("");
  const [itemStorage, setItemStorage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newItem: Item = {
      item_id: itemId,
      item_name: itemName,
      sku: itemSKU,
      quantity: itemQuantity,
      category: itemCategory,
      storage_location: itemStorage,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/v1/items`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add new item");
      }

      const result = await response.json();

      addItem(result);

      setItemName("");
      setItemStorage("");
      setItemSKU("");
      setItemQuantity(0);
      setItemCategory("");
      closeModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-12 w-1/2 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-black">Add New Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Item Name
            </label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="mt-1 p-2 border rounded w-full text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              SKU
            </label>
            <input
              type="text"
              value={itemSKU}
              onChange={(e) => setItemSKU(e.target.value)}
              className="mt-1 p-2 border rounded w-full text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              value={itemQuantity}
              onChange={(e) => setItemQuantity(Number(e.target.value))}
              className="mt-1 p-2 border rounded w-full text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
              className="mt-1 p-2 border rounded w-full text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Storage
            </label>
            <input
              type="text"
              value={itemStorage}
              onChange={(e) => setItemStorage(e.target.value)}
              className="mt-1 p-2 border rounded w-full text-black"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-300 text-gray-700 rounded px-4 py-2 mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white rounded px-4 py-2"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
