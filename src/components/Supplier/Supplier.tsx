import { getAllSupplier } from "@/client/supplier";
import { useCallback, useEffect, useState } from "react";
import SkeletonLoader from "../Skeleton/Skeleton";
import { SupplierType } from "./SupplierType";

interface SupplierProps {
  searchQuery: string;
  sortOrder: string;
}

export default function Supplier({ searchQuery, sortOrder }: SupplierProps) {
  const [suppliers, setSuppliers] = useState<SupplierType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSuppliers = useCallback(async () => {
    try {
      const response = await getAllSupplier();
      if (response.data && response.data.data.length > 0) {
        setSuppliers(response.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSuppliers();
  }, [fetchSuppliers]);

  const filteredSuppliers = suppliers.filter(
    (supplier) =>
      supplier.supplier_name &&
      supplier.supplier_name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const sortedSuppliers = filteredSuppliers.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.supplier_name.localeCompare(b.supplier_name);
    } else if (sortOrder === "desc") {
      return b.supplier_name.localeCompare(a.supplier_name);
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
            <th>Supplier Name</th>
            <th>Contact Person</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            skeletonRows.map((_, index) => (
              <tr key={index} className="border border-gray-400">
                <SkeletonLoader columnCount={6} />
              </tr>
            ))
          ) : sortedSuppliers.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center">
                No suppliers found
              </td>
            </tr>
          ) : (
            sortedSuppliers.map((supplier) => (
              <tr
                key={supplier._id}
                className="border border-gray-400 text-center"
              >
                <td className="py-4">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td>{supplier.supplier_name}</td>
                <td>{supplier.contact_person}</td>
                <td>{supplier.address}</td>
                <td>{supplier.phone_number}</td>
                <td>{supplier.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
