import { ControllerFieldState, ControllerRenderProps, FieldValues } from "react-hook-form"

export const useFormHelper = <T extends FieldValues>() => {
    const bindInput = (
        field: ControllerRenderProps<T>,
        fieldState: ControllerFieldState,
    ) => {
        const { value, onBlur, onChange, name } = field
        const { error } = fieldState

        return {
            name,
            value,
            onBlur,
            onChange,
            error,
        }
    }
    return {
        bindInput
    }
}