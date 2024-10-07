"use client";
import { SyntheticEvent, useState } from "react";

interface Item {
  _id: string;
  item_name: string;
  sku: string;
  quantity: number;
  category: string;
  storage_location: string;
}

interface UpdateButtonProps {
  item: Item;
  onUpdate: (updatedItem: Item) => void;
}

export default function UpdateItem({ item, onUpdate }: UpdateButtonProps) {
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);
  const [updatedItem, setUpdatedItem] = useState<Item>(item);

  async function handleUpdate(e: SyntheticEvent) {
    e.preventDefault();
    setIsMutating(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/v1/items/${updatedItem._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            item_name: updatedItem.item_name,
            sku: updatedItem.sku,
            quantity: updatedItem.quantity,
            category: updatedItem.category,
            storage_location: updatedItem.storage_location,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update item.");
      }
      onUpdate(updatedItem);
    } catch (error) {
      console.error("Error updating item:", error);
    } finally {
      setIsMutating(false);
      setModal(false);
    }
  }

  function handleChange() {
    setModal(!modal);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUpdatedItem({ ...updatedItem, [name]: value });
  }

  return (
    <div>
      <button
        className="bg-purple-700 text-white rounded p-2 transition-all hover:bg-purple-500 hover:text-indigo-900"
        onClick={handleChange}
      >
        Edit
      </button>

      {modal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleChange}
        >
          <div
            className="modal-box w-full max-w-md p-8 bg-white rounded shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-bold text-lg">
              Edit item:{" "}
              <span className="text-purple-700">{item.item_name}</span>
            </h3>

            <div className="mt-4 space-y-2">
              <input
                type="text"
                name="item_name"
                value={updatedItem.item_name}
                onChange={handleInputChange}
                placeholder="Item Name"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="text"
                name="sku"
                value={updatedItem.sku}
                onChange={handleInputChange}
                placeholder="SKU"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="number"
                name="quantity"
                value={updatedItem.quantity}
                onChange={handleInputChange}
                placeholder="Quantity"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="text"
                name="category"
                value={updatedItem.category}
                onChange={handleInputChange}
                placeholder="Category"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="text"
                name="storage_location"
                value={updatedItem.storage_location}
                onChange={handleInputChange}
                placeholder="Storage Location"
                className="w-full px-4 py-2 border rounded"
              />
            </div>

            <div className="modal-action mt-4 flex justify-center space-x-4">
              <button
                type="button"
                className="btn bg-gray-500 text-white rounded px-4 py-2 hover:bg-gray-600"
                onClick={handleChange}
              >
                Close
              </button>

              {!isMutating ? (
                <button
                  type="button"
                  onClick={handleUpdate}
                  className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-500 transition-all"
                >
                  Update
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Updating...
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
