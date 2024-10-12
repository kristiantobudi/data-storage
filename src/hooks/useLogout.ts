import { logout } from "@/client";
import { deleteAuth } from "@/utils";
import { useRouter } from "next/navigation";

export const useLogout = () => {
    const navigate = useRouter() 
    const onLogout = async () => {
        try {
            const response = await logout();
            if (response && response.status === 204) {
                await deleteAuth();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogout = async () => {
        await onLogout();
        navigate.push('/auth/login')
    }

    return {
        handleLogout
    }
}