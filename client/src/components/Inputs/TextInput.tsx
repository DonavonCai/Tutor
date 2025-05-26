import { memo, useId } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
    labelText: string;
    name?: string;
    minLength?: number;
    maxLength?: number;
    placeholder?: string;
    register?: UseFormRegisterReturn;
}

export const TextInput = memo((props: IProps) => {
    const { labelText, name, minLength, maxLength, placeholder, register } =
        props;

    // Generate a unique ID for the element
    const uniqueId = useId();

    return (
        <>
            <label>{labelText}</label>
            <textarea
                id={uniqueId}
                name={name}
                minLength={minLength}
                maxLength={maxLength}
                placeholder={placeholder}
                {...register}
            />
        </>
    );
});
