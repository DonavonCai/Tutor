import { memo, useId, useMemo } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IProps
    extends React.DetailedHTMLProps<
        React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    > {
    labelText: string;
    register?: UseFormRegisterReturn;
    className?: string;
}

export const TextAreaInput = memo((props: IProps) => {
    const { labelText, register, className, ...passThroughProps } = props;

    // Generate a unique ID for the element
    const uniqueId = useId();

    const classes = useMemo(() => {
        return className === undefined ? "TextInput" : "TextInput " + className;
    }, []);

    return (
        <textarea
            className={classes}
            id={uniqueId}
            placeholder={labelText}
            {...register}
            {...passThroughProps}
        />
    );
});
