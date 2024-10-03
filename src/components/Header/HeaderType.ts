export type Item = {
    item_id:string;
    item_name: string;
    sku: string;
    quantity: number;
    category: string;
    storage_location: string;
  }

  export type HeaderProps = {
    title: string;
    button_name: string;
    openModal: () => void;
  }