"use client";
import ItemTable from "@/components/Items";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar";
import AddItem from "@/components/Header/AddItem";
import { useModal } from "@/components/Header/useHeader";
import DefaultLayouts from "@/components/Layouts/DefaultLayouts";

const ItemPage: React.FC = () => {
  const { addItem, isModalOpen, closeModal, openModal } = useModal();

  return (
    <DefaultLayouts>
      <div className="flex flex-col min-h-screen">
        <Header title="Items" button_name="Add Item" openModal={openModal} />
        <SearchBar placeholder="Search item ID.." isStockPage={false} />
        <ItemTable />
        {isModalOpen && (
          <AddItem
            closeModal={closeModal}
            addItem={addItem}
          />
        )}
      </div>
    </DefaultLayouts>
  );
};

export default ItemPage;
