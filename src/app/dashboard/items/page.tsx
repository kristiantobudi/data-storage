"use client";
import ItemTable from "@/components/Items";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar";
import AddItem from "@/components/Header/AddItem";
import { useModal } from "@/components/Header/useHeader";

const Page: React.FC = () => {
  const { items, addItem, isModalOpen, closeModal, openModal } = useModal();
  const lastItemId = items.length > 0 ? items[items.length - 1].item_id : 0;

  return (
    <div className="flex flex-col min-h-screen">
      <h1>Inventory Items</h1>
      <Header title="Items" button_name="Add Item" openModal={openModal} />
      <SearchBar placeholder="Search item ID.." isStockPage={false} />
      <ItemTable items={items} />
      {isModalOpen && (
        <AddItem
          closeModal={closeModal}
          addItem={addItem}
          lastItemId={lastItemId}
        />
      )}
    </div>
  );
};

export default Page;
