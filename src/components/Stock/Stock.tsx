import { getAllStock } from "@/client/stock";
import { StockType } from "@/types/stockType";
import { useState, useEffect, useCallback } from "react";
import SkeletonLoader from "../Skeleton/Skeleton";

interface StockProps {
  searchQuery: string;
  sortOrder: string;
}

export default function Stock({ searchQuery, sortOrder }: StockProps) {
  const [isStock, setIsStock] = useState<StockType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchStockItem = useCallback(async () => {
    try {
      const response = await getAllStock();
      if (response.data && response.data.data.length > 0) {
        setIsStock(response.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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

  const skeletonRows = Array(5).fill(null);

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
          {isLoading ? (
            skeletonRows.map((_, index) => (
              <tr key={index} className="border border-gray-400">
                <SkeletonLoader columnCount={4} />{" "}
              </tr>
            ))
          ) : sortedStock.length === 0 ? (
            <tr>
              <td colSpan={4} className="p-4 text-center">
                No stock items found.
              </td>
            </tr>
          ) : (
            sortedStock.map((stock) => (
              <tr
                key={stock._id}
                className="border border-gray-400 text-center"
              >
                <td className="py-4">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td>{stock.itemName}</td>
                <td>{stock.quantity_change}</td>
                <td>{stock.action}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
