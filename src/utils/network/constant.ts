import AxiosInstance  from "axios"

export const axiosIntance = AxiosInstance.create({
    baseURL: process.env.NEXT_PUBLIC_VERCEL_URL,
    timeout: 10000
})