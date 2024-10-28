import { SupplierEndpoint } from "@/utils/network";
import { NewSupplierProps } from "../SupplierType";

export const createNewSupplier = async (newSupplier: NewSupplierProps) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/${SupplierEndpoint}`, { method: 'POST', body: JSON.stringify(newSupplier) });
    if (!response.ok) {
        throw new Error('Failed to create new supplier');
    }

    return response.json();
}