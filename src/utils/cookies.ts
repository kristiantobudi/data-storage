'use server'

import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export const storeToken = async (token: string ) => {
    cookies().set('Authorization', token, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    })
    redirect('/dashboard');
}

export const getCookies = async (key: string) => {
    return cookies().get(key)?.value
}

export const deleteCookies = async (key: string) => {
    cookies().delete(key)
}

export const deleteAuth = () => {
    cookies().delete('Authorization');
    redirect('/auth/login');
};

export const resetCookies = () => {
    const cookieStore = cookies();
    cookieStore.getAll().forEach(cookie => deleteCookies(cookie.name));
    redirect('/auth/login');
}