import React, { useState } from "react";

interface Item {
  item_id: number;
  item_name: string;
  description: string;
  sku: string;
  qty: number;
  category_id: number;
}

interface AddItemProps {
  closeModal: () => void;
  addItem: (newItem: Omit<Item, "item_id">) => void;
}

const AddItem: React.FC<AddItemProps> = ({ closeModal, addItem }) => {
  const [itemName, setItemName] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [itemSKU, setItemSKU] = useState("");
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemCatId, setItemCatId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newItem: Omit<Item, "item_id"> = {
      item_name: itemName,
      description: itemDesc,
      sku: itemSKU,
      qty: itemQuantity,
      category_id: Number(itemCatId),
    };

    addItem(newItem);
    setItemName("");
    setItemDesc("");
    setItemSKU("");
    setItemQuantity(0);
    setItemCatId("");
    closeModal();
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
              Item Description
            </label>
            <input
              type="text"
              value={itemDesc}
              onChange={(e) => setItemDesc(e.target.value)}
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
              Category ID
            </label>
            <input
              type="number"
              value={itemCatId}
              onChange={(e) => setItemCatId(e.target.value)}
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
