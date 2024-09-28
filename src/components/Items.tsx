import React from "react";

interface Item {
  item_id: number;
  item_name: string;
  description: string;
  sku: string;
  qty: number;
  category_id: number;
}

interface ItemTableProps {
  items: Item[];
}

const ItemTable: React.FC<ItemTableProps> = ({ items }) => {
  return (
    <div className="w-full bg-white text-purple-950">
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-4 px-4">
              <input type="checkbox" className="form-checkbox" />
            </th>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Description</th>
            <th>SKU</th>
            <th>Quantity</th>
            <th>Category ID</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.item_id}
              className="border border-gray-400 text-center"
            >
              <td className="py-4">
                <input type="checkbox" className="form-checkbox" />
              </td>
              <td>{item.item_id}</td>
              <td>{item.item_name}</td>
              <td>{item.description}</td>
              <td>{item.sku}</td>
              <td>{item.qty}</td>
              <td>{item.category_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
