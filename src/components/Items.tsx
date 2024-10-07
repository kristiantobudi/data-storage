import React from "react";
import DeleteButton from "./Button/Delete";
import { useButton } from "./Button/useButton";
import UpdateItem from "./Button/Edit";

interface Item {
  item_id: string;
  item_name: string;
  sku: string;
  quantity: number;
  category: string;
  storage_location: string;
}

interface ItemTableProps {
  items: Item[];
}

const ItemTable: React.FC<ItemTableProps> = ({ items }) => {
  const { handleUpdate, handleDelete } = useButton();

  return (
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
          {items?.map((item) => (
            <tr
              key={item.item_id}
              className="border border-gray-400 text-center"
            >
              <td className="py-4">
                <input type="checkbox" className="form-checkbox" />
              </td>
              <td>{item.item_name}</td>
              <td>{item.sku}</td>
              <td>{item.quantity}</td>
              <td>{item.category}</td>
              <td>{item.storage_location}</td>
              <td className="flex justify-center space-x-2 py-2">
                {/* <button className="bg-purple-700 text-white rounded p-2 transition-all hover:bg-purple-500 hover:text-indigo-900">
                  Edit
                </button> */}
                <UpdateItem item={item} onUpdate={handleUpdate} />
                <DeleteButton item={item} onDelete={handleDelete} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
