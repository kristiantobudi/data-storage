
import { RegisterSchema, RegisterSchemaType } from "@/schema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form"
import { storeToken } from "@/utils"
import { register } from "@/client";

export const useRegister = () => {
    const {
        control: registerControl,
        handleSubmit: handleRegisterSubmit,
        formState: { errors: registerErrors },
    } = useForm<RegisterSchemaType>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onRegister: SubmitHandler<RegisterSchemaType> = async (data) => {
        try {
        const response = await register(data);
        if (response.data?.token) {
            storeToken(response.data.token);
        }
        } catch (error) {console.log(error)}
    }

    const onSubmit = () => {
        handleRegisterSubmit(data => {
            onRegister(data)
        })
    }

    return {
        registerControl,
        handleRegisterSubmit,
        onSubmit,
        registerErrors
    }
}