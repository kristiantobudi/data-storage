import { getCookies } from "@/utils/cookies"
import { axiosIntance, UserEndpoint } from "@/utils/network"

export type LoginDataProps = {
    username: string
    password: string
}

export type RegisterDataProps = {
    firstName: string
    lastName: string
    username: string
    password: string
    confirmPassword: string
}

export const login = async (data: LoginDataProps) => {
    return axiosIntance.post(UserEndpoint, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const register = async (data: RegisterDataProps) => {
    return axiosIntance.post(`${UserEndpoint}/register/:id`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const logout = async () => {
    const auth = await getCookies('Authorization')
    return axiosIntance.post(
        UserEndpoint,
        {},
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        }
    )
}