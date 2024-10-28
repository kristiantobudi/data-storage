"use client";
import { SupplierEndpoint } from "@/utils/network";
import React, { useState } from "react";
// import { createNewSupplier } from "./services/supplierServices";

interface NewSupplier {
  supplier_name: string;
  contact_person: string;
  address: string;
  phone_number: string;
  email: string;
}

interface SupplierType extends NewSupplier {
  supplier_id: string;
  _id?: string;
  created_at?: string;
  updated_at?: string;
}

interface AddSupplierProps {
  closeModal: () => void;
  addSupplier: (supplier: SupplierType) => void;
}

export const AddSupplier: React.FC<AddSupplierProps> = ({
  closeModal,
  addSupplier,
}) => {
  const [supplierName, setSupplierName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newSupplier: NewSupplier = {
      supplier_name: supplierName.toUpperCase(),
      contact_person: contactPerson,
      address: address,
      phone_number: phoneNumber,
      email: email,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_VERCEL_URL}/${SupplierEndpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newSupplier),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add supplier");
      }

      const result: SupplierType = await response.json();

      addSupplier(result);

      setSupplierName("");
      setContactPerson("");
      setAddress("");
      setPhoneNumber("");
      setEmail("");
      closeModal();
    } catch (error) {
      console.error("Error adding supplier:", error);
      alert("Failed to add supplier. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-12 w-1/2 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-950">
          Add New Supplier
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Supplier Name
            </label>
            <input
              type="text"
              value={supplierName}
              onChange={(e) => setSupplierName(e.target.value)}
              className="mt-1 p-2 border rounded w-full text-gray-950"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Contact Person
            </label>
            <input
              type="text"
              value={contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
              className="mt-1 p-2 border rounded w-full text-gray-950"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 p-2 border rounded w-full text-gray-950"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 p-2 border rounded w-full text-gray-950"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border rounded w-full text-gray-950"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 rounded px-4 py-2 mr-2 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 transition-colors"
            >
              Add Supplier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSupplier;
