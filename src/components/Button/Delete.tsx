"use client";
import { useState } from "react";

interface Item {
  item_id: string
  item_name: string;
}

interface DeleteButtonProps {
  item: Item;
  onDelete: (item_id: string) => void;
}

export default function DeleteButton({ item, onDelete }: DeleteButtonProps) {
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  function handleDelete() {
    setIsMutating(true);
    onDelete(item.item_name);
    setIsMutating(false);
    setModal(false);
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      <button
        className="bg-red-600 text-white rounded p-2 transition-all hover:bg-red-400 hover:text-indigo-900"
        onClick={handleChange}
      >
        Delete
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
              Are you sure you want to delete{" "}
              <span className="text-red-500">{item.item_name}</span>?
            </h3>

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
                  onClick={handleDelete}
                  className="bg-red-600 text-white rounded px-4 py-2 hover:bg-red-500 transition-all"
                >
                  Delete
                </button>
              ) : (
                <button type="button">Deleting...</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
