import { useState } from "react"

export const useToggle = () => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return {
        showPassword,
        toggleShowPassword,
    }
}
