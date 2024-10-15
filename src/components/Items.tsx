import React, { useEffect, useState } from "react";
import DeleteButton from "./Button/Delete";
import UpdateItem from "./Button/Edit";
import { ItemType } from "@/types/ItemTypes";

interface ItemTableProps {
  searchQuery: string;
  sortOrder: string;
}

const ItemTable: React.FC<ItemTableProps> = ({ searchQuery, sortOrder }) => {
  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemType>();
  const [updatedItem, setUpdatedItem] = useState<ItemType>();

  const [items, setItems] = useState<ItemType[]>([]);

  const fetchItems = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/v1/items`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }
      const resData = await response.json();
      setItems(resData.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const filteredItems = items
    .filter((item) =>
      item.item_name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.item_name.localeCompare(b.item_name);
      } else if (sortOrder === "desc") {
        return b.item_name.localeCompare(a.item_name);
      }
      return 0;
    });

  const onDeleteItem = async (item_id: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/v1/items/${item_id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete item.");
      }
      await fetchItems();
    } catch (error) {
      console.error("Error deleting item:", error);
    } finally {
      setIsShowModalDelete(false);
    }
  };

  const onEditItem = async (
    item_id: string,
    item_name: string,
    sku: string,
    quantity: number,
    category: string,
    storage_location: string
  ) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/v1/items/${item_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            item_name,
            sku,
            quantity,
            category,
            storage_location,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update item.");
      }
      await fetchItems();
    } catch (error) {
      console.error("Error updating item:", error);
    } finally {
      setIsShowModalEdit(false);
    }
  };

  const onClickButtonDelete = (item: ItemType) => {
    setIsShowModalDelete(true);
    setSelectedItem(item);
  };

  const onClickButtonEdit = (item: ItemType) => {
    setIsShowModalEdit(true);
    setSelectedItem(item);
  };

  const onCloseModalDelete = () => {
    setIsShowModalDelete(false);
    setSelectedItem(undefined);
  };

  const onCloseModalEdit = () => {
    setIsShowModalEdit(false);
    setSelectedItem(undefined);
  };

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUpdatedItem((prevItem?: ItemType) => ({ ...prevItem!, [name]: value }));
  }

  useEffect(() => {
    setUpdatedItem(selectedItem);
  }, [selectedItem]);

  return (
    <>
      {isShowModalDelete && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={onCloseModalDelete}
        >
          <div
            className="modal-box w-full max-w-md p-8 bg-white rounded shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-bold text-lg">
              Are you sure you want to delete{" "}
              <span className="text-red-500">{selectedItem?.item_name}</span>?
            </h3>

            <div className="modal-action mt-4 flex justify-center space-x-4">
              <button
                type="button"
                className="btn bg-gray-500 text-white rounded px-4 py-2 hover:bg-gray-600"
                onClick={onCloseModalDelete}
              >
                Close
              </button>

              <button
                type="button"
                onClick={
                  selectedItem
                    ? () => onDeleteItem(selectedItem._id)
                    : undefined
                }
                className="bg-red-600 text-white rounded px-4 py-2 hover:bg-red-500 transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {isShowModalEdit && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={onCloseModalEdit}
        >
          <div
            className="modal-box w-full max-w-md p-8 bg-white rounded shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-bold text-lg">
              Edit item:{" "}
              <span className="text-purple-700">{selectedItem?.item_name}</span>
            </h3>

            <div className="mt-4 space-y-2">
              <input
                type="text"
                name="item_name"
                value={updatedItem?.item_name}
                onChange={handleInputChange}
                placeholder="Item Name"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="text"
                name="sku"
                value={updatedItem?.sku}
                onChange={handleInputChange}
                placeholder="SKU"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="number"
                name="quantity"
                value={updatedItem?.quantity}
                onChange={handleInputChange}
                placeholder="Quantity"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="text"
                name="category"
                value={updatedItem?.category}
                onChange={handleInputChange}
                placeholder="Category"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="text"
                name="storage_location"
                value={updatedItem?.storage_location}
                onChange={handleInputChange}
                placeholder="Storage Location"
                className="w-full px-4 py-2 border rounded"
              />
            </div>

            <div className="modal-action mt-4 flex justify-center space-x-4">
              <button
                type="button"
                className="btn bg-gray-500 text-white rounded px-4 py-2 hover:bg-gray-600"
                onClick={onCloseModalEdit}
              >
                Close
              </button>

              <button
                type="button"
                onClick={() =>
                  onEditItem(
                    updatedItem?._id ?? "",
                    updatedItem?.item_name ?? "",
                    updatedItem?.sku ?? "",
                    updatedItem?.quantity ?? 0,
                    updatedItem?.category ?? "",
                    updatedItem?.storage_location ?? ""
                  )
                }
                className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-500 transition-all"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex-grow w-full bg-white text-purple-950">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-4 px-4">
                <input type="checkbox" className="form-checkbox" />
              </th>
              <th>Item Name</th>
              <th>SKU</th>
              <th>Quantity</th>
              <th>Category</th>
              <th>Storage</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems?.map((item) => (
              <tr key={item._id} className="border border-gray-400 text-center">
                <td className="py-4">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td>{item.item_name}</td>
                <td>{item.sku}</td>
                <td>{item.quantity}</td>
                <td>{item.category}</td>
                <td>{item.storage_location}</td>
                <td className="flex justify-center space-x-2 py-2">
                  <UpdateItem
                    onClick={() => {
                      onClickButtonEdit(item);
                    }}
                  />
                  <DeleteButton
                    onClick={() => {
                      onClickButtonDelete(item);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ItemTable;
