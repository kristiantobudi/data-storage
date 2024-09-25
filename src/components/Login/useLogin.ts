import { login } from "@/app/client/auth"
import { LoginSchema, LoginSchemaType } from "@/app/schema/loginSchema"
import { storeToken } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"

export const useLogin = () => {
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

    const onSubmit = () => {
        handleLoginSubmit(data => {
            onLogin(data)
        })
    }

    return {
        loginControl,
        handleLoginSubmit,
        loginErrors,
        onLogin,
        onSubmit
    }
}