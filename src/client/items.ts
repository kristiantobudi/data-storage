import { axiosIntance, ItemEndpoint } from "@/utils/network"
import { ItemData } from "./settings/ItemData"

export const getAllItem = async () => {
    return axiosIntance.get(ItemEndpoint, {
        params: {
            current_user_data: true
        }
    })
}


export const getItemById = async (id: number) => {
    return axiosIntance.get(`${ItemEndpoint}/${id}`)
}

export const createItem = async (data: ItemData) => {
    return axiosIntance.post(ItemEndpoint, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const deleteItemById = async (id: number) => {
    return axiosIntance.delete(`${ItemEndpoint}/${id}`)
}