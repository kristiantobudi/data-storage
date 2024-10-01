import { getItemById } from "@/client";
import { ItemType } from "@/types/ItemTypes";
import { createContext, useCallback, useEffect, useState } from "react";

export const ItemContext = createContext({
    itemDetails: {} as ItemType | undefined
})

export const useItemContext = (id: string) => {
    const [item, setItem] = useState<ItemType>()

    const fetchItem = useCallback(async () => {
        try {
            const response = await getItemById(parseInt(id))
            if (response.data) {
                setItem(response.data)
            }
        } catch (error) {
            console.error(error)
        }
    }, [id])

    useEffect(() => {
        fetchItem()
    }, [fetchItem])

    return {
        itemDetails: item
    }
}