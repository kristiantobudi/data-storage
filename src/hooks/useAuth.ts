import { login, register } from "@/app/client/auth"
import { LoginSchema, LoginSchemaType } from "@/app/schema/loginSchema"
import { RegisterSchema, RegisterSchemaType } from "@/app/schema/registerSchema"
import { storeToken } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

export const useAuth = () => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const {
        control: loginControl,
        handleSubmit: handleLoginSubmit,
        formState: { errors: loginErrors },
    } = useForm<LoginSchemaType>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    })

    const {
        control: registerControl,
        handleSubmit: handleRegisterSubmit,
        formState: { errors: registerErrors },
    } = useForm<RegisterSchemaType>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onLogin: SubmitHandler<LoginSchemaType> = async (data) => {
        try {
            const response = await login(data);
            if (response.data?.token) {
                storeToken(response.data.token);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const onRegister: SubmitHandler<RegisterSchemaType> = async (data) => {
        try {
        const response = await register(data);
        if (response.data?.token) {
            storeToken(response.data.token);
        }
        } catch (error) {console.log(error)}
    }

    return {
        loginControl,
        handleLoginSubmit,
        loginErrors,
        onLogin,
        registerControl,
        handleRegisterSubmit,
        registerErrors,
        onRegister,
        showPassword,
        toggleShowPassword,
    }
}
