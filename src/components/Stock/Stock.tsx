import { getAllStock } from "@/client/stock";
import { StockType } from "@/types/stockType";
import { useState, useEffect, useCallback } from "react";

interface StockProps {
  searchQuery: string;
  sortOrder: string;
}

export default function Stock({ searchQuery, sortOrder }: StockProps) {
  const [isStock, setIsStock] = useState<StockType[]>([]);

  const fetchStockItem = useCallback(async () => {
    try {
      const response = await getAllStock();
      if (response.data && response.data.data.length > 0) {
        setIsStock(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchStockItem();
  }, [fetchStockItem]);

  const filteredStock = isStock.filter((stock) =>
    stock.itemName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedStock = filteredStock.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.itemName.localeCompare(b.itemName);
    } else if (sortOrder === "desc") {
      return b.itemName.localeCompare(a.itemName);
    }
    return 0;
  });

  return (
    <div className="flex-grow w-full bg-white text-purple-950">
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-4">
              <input type="checkbox" className="form-checkbox" />
            </th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedStock?.map((stock) => (
            <tr key={stock._id} className="border border-gray-400 text-center">
              <td className="py-4">
                <input type="checkbox" className="form-checkbox" />
              </td>
              <td>{stock.itemName}</td>
              <td>{stock.quantity_change}</td>
              <td>{stock.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
