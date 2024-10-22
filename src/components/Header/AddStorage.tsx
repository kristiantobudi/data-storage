"use client";
import React, { useState } from "react";

interface NewStorage {
  item_name: string;
  sku: string;
  quantity: number;
  category: string;
  storage_location: string;
}

interface Storage extends NewStorage {
  item_id: string;
}

interface AddStorageProps {
  closeModal: () => void;
  addItem: (newItem: Storage) => void;
}

const AddStorage: React.FC<AddStorageProps> = ({ closeModal, addItem }) => {
  const [itemName, setItemName] = useState("");
  const [itemSKU, setItemSKU] = useState("");
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemCategory, setItemCategory] = useState("");
  const [itemStorage, setItemStorage] = useState("");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: NewStorage = {
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

      const result: Storage = await response.json();

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
        <h2 className="text-2xl font-bold mb-4 text-black">Add New Storage</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Storage Name
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
              Section
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
              Shelf
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
              Add Storage
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStorage;
