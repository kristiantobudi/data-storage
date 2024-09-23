import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export const storeToken = async (token: string ) => {
    cookies().set('Authorization', token, {
        secure: true, httpOnly: true  
    })
    redirect('/');
}

export const getCookies = async (key: string) => {
    return cookies().get(key)?.value
}

export const deleteCookies = async (key: string) => {
    cookies().delete(key)
}

export const deleteAuth = async () => {
    cookies().delete('Authorization')
    redirect('/login')
}

export const resetCookies = () => {
    cookies()
        .getAll()
        .forEach(cookie => {
            deleteCookies(cookie.name)
        })
    redirect('/dashboard')
}