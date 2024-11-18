"use client";

import { useState } from "react";
import DefaultLayouts from "@/components/Layouts/DefaultLayouts";
import IncomingTable from "@/components/Transactions/Incoming/IncomingTable";

interface IncomingItem {
  date: string;
  supplierName: string;
  itemName: string;
  quantity: string;
  section: string;
  shelf: string;
}

const IncomingPage: React.FC = () => {
  const [form, setForm] = useState({
    date: "",
    supplierName: "",
    itemName: "",
    quantity: "",
    section: "",
    shelf: "",
  });

  const [items, setItems] = useState<IncomingItem[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setItems([...items, form]);
    setForm({
      date: "",
      supplierName: "",
      itemName: "",
      quantity: "",
      section: "",
      shelf: "",
    });
    alert("Incoming goods success!");
  };

  return (
    <DefaultLayouts>
      <div className="flex flex-col items-center min-h-screen p-6 bg-white">
        <h1 className="text-2xl font-semibold mb-6">Incoming Goods</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md mb-8"
        >
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Entry
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="supplierName"
              className="block text-sm font-medium text-gray-700"
            >
              Supplier
            </label>
            <input
              type="text"
              id="supplierName"
              name="supplierName"
              value={form.supplierName}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="itemName"
              className="block text-sm font-medium text-gray-700"
            >
              Item
            </label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              value={form.itemName}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="section"
              className="block text-sm font-medium text-gray-700"
            >
              Section
            </label>
            <input
              type="text"
              id="section"
              name="section"
              value={form.section}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="shelf"
              className="block text-sm font-medium text-gray-700"
            >
              Shelf
            </label>
            <input
              type="text"
              id="shelf"
              name="shelf"
              value={form.shelf}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="w-1/3 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
        <IncomingTable items={items} />
      </div>
    </DefaultLayouts>
  );
};

export default IncomingPage;
