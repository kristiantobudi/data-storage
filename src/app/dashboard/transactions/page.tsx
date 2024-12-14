"use client";

import DefaultLayouts from "@/components/Layouts/DefaultLayouts";
import { useRouter } from "next/navigation";

const TransactionPage: React.FC = () => {
  const router = useRouter();

  const goToBarangMasuk = () => {
    router.push("./transactions/incoming/");
  };

  const goToBarangKeluar = () => {
    router.push("/barang-keluar");
  };

  return (
    <DefaultLayouts>
      <div className="flex flex-col min-h-screen items-center space-y-8">
        <div
          className="w-full max-w-md p-6 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
          onClick={goToBarangMasuk}
        >
          <h2 className="text-xl font-semibold text-center">Incoming Goods</h2>
          <p className="text-center text-gray-500">Manage Incoming Goods</p>
        </div>
        <div
          className="w-full max-w-md p-6 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
          onClick={goToBarangKeluar}
        >
          <h2 className="text-xl font-semibold text-center">Outcoming Goods</h2>
          <p className="text-center text-gray-500">Manage Outcoming Goods</p>
        </div>
      </div>
    </DefaultLayouts>
  );
};

export default TransactionPage;
