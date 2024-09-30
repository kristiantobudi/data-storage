import { LoginDataProps } from "@/types/LoginType"
import { RegisterDataProps } from "@/types/RegisterType"
import { deleteCookies } from "@/utils/cookies"
import { axiosIntance, LoginEndpoint, LogoutEndpoint, RegisterEndpoint } from "@/utils/network"

export const login = async (data: LoginDataProps) => {
    return axiosIntance.post(LoginEndpoint, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const register = async (data: RegisterDataProps) => {
    return axiosIntance.post(RegisterEndpoint, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const logout = async () => {
    const auth = await deleteCookies('Authorization')
    return axiosIntance.post(
        LogoutEndpoint,
        {},
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth}`
            }
        }
    ).catch(error => {
        console.error(error)
    })
}