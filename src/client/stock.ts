import { axiosIntance, StockEndpoint } from "@/utils/network"

export const getAllStock = async () => {
    return axiosIntance.get(StockEndpoint, {
        params: {
            current_user_data: true
        }
    })
}