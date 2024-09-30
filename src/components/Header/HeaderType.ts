export type Item = {
    item_id: number;
    item_name: string;
    description: string;
    sku: string;
    qty: number;
    category_id: number;
  }

  export type HeaderProps = {
    title: string;
    button_name: string;
    openModal: () => void;
  }