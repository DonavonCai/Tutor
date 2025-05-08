import { memo, useId } from "react";

interface IProps {
    name?: string;
    minLength?: number;
    maxLength?: number;
    placeholder?: string;
}

export const TextInput = memo((props: IProps) => {
    const { name, minLength, maxLength, placeholder } = props;

    // Generate a unique ID for the element
    const uniqueId = useId();

    return (
        <textarea
            id={uniqueId}
            name={name}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
        />
    );
});
