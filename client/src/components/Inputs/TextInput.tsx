import { memo, useId, useMemo } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
    labelText: string;
    name?: string;
    minLength?: number;
    maxLength?: number;
    register?: UseFormRegisterReturn;
    className?: string;
}

export const TextInput = memo((props: IProps) => {
    const { labelText, name, minLength, maxLength, register, className } =
        props;

    // Generate a unique ID for the element
    const uniqueId = useId();

    const classes = useMemo(() => {
        return className === undefined ? "TextInput" : "TextInput " + className;
    }, []);

    return (
        <textarea
            className={classes}
            id={uniqueId}
            name={name}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={labelText}
            {...register}
        />
    );
});
