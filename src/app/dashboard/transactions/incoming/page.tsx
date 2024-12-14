"use client";

import { useState } from "react";
import DefaultLayouts from "@/components/Layouts/DefaultLayouts";
import IncomingTable from "@/components/Transactions/Incoming/IncomingTable";
import TransactionHeader from "@/components/Transactions/TransactionHeader";
import AddIncoming from "@/components/Transactions/Incoming/AddIncoming";

interface IncomingItem {
  date: string;
  supplierName: string;
  itemName: string;
  quantity: string;
  section: string;
  shelf: string;
}

interface IncomingTableProps {
  items: IncomingItem[];
}

const IncomingPage: React.FC<IncomingTableProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <DefaultLayouts>
      <TransactionHeader
        title="Incoming Goods"
        button_name="Enter Incoming Goods"
        openModal={openModal}
      />
      {/* <IncomingTable /> */}
      {isModalOpen && <AddIncoming closeModal={closeModal} />}
    </DefaultLayouts>
  );
};

export default IncomingPage;
