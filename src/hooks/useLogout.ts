import { logout } from "@/app/client";
import { deleteAuth } from "@/utils";

export const useLogout = () => {
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

    return {
        onLogout
    }
}