  export interface NewSupplierProps {
    supplier_name: string;
    contact_person: string;
    address: string;
    phone_number: string;
    email: string;
}

export interface BaseSupplier {
  supplier_name: string;
  contact_person: string;
  address: string;
  phone_number: string;
  email: string;
}

export interface SupplierType extends BaseSupplier {
  supplier_id: string;
  _id?: string;
  created_at?: string;
  updated_at?: string;
}

export interface AddSupplierProps {
  onClose: () => void;
  addSupplier: (supplier: SupplierType) => void;
}