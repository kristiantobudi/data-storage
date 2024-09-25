import { login } from "@/app/client/auth"
import { LoginSchema, LoginSchemaType } from "@/app/schema/loginSchema"
import { storeToken } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export const useLogin = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchemaType>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    })

    const onLogin = async (data: LoginSchemaType) => {
        try {
            const response = await login(data);
            if (response.data.data.accessToken) {
                storeToken(response.data.data.accessToken);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = handleSubmit(onLogin)

    return {
        control,
        errors,
        handleSubmit,
        onSubmit
    }
}