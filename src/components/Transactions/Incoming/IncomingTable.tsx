"use client";

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

const IncomingTable: React.FC<IncomingTableProps> = ({ items }) => {
  return (
    <div className="w-full max-w-4xl justify-items-center bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Incoming Goods Table</h2>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Supplier</th>
            <th className="border px-4 py-2">Item</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Section</th>
            <th className="border px-4 py-2">Shelf</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">{item.date}</td>
              <td className="border px-4 py-2">{item.supplierName}</td>
              <td className="border px-4 py-2">{item.itemName}</td>
              <td className="border px-4 py-2">{item.quantity}</td>
              <td className="border px-4 py-2">{item.section}</td>
              <td className="border px-4 py-2">{item.shelf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomingTable;
