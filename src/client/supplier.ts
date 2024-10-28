// import { SupplierType } from "@/components/Supplier/SupplierType"
import { axiosIntance, SupplierEndpoint } from "@/utils/network"
export const getAllSupplier = async () => {
    return axiosIntance.get(SupplierEndpoint, {
        params: {
            current_user_data: true
        }
    })
}
export const getSupplierById = async (id: number) => {
    return axiosIntance.get(`${SupplierEndpoint}/${id}`)
}

export const deleteSupplierById = async (id: number) => {
    return axiosIntance.delete(`${SupplierEndpoint}/${id}`)
}