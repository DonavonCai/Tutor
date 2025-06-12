import { memo, useId, useMemo } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import "../../../styles/styles.scss";

interface IProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    labelText: string;
    register?: UseFormRegisterReturn;
    className?: string;
}

export const TextInput = memo((props: IProps) => {
    const { labelText, register, className, ...passThroughProps } = props;

    // Generate a unique ID for the element
    const uniqueId = useId();

    const baseClass = "TextInput underline";

    const classes = useMemo(() => {
        return className === undefined
            ? baseClass
            : baseClass + " " + className;
    }, []);

    return (
        <input
            className={classes}
            id={uniqueId}
            placeholder={labelText}
            {...register}
            {...passThroughProps}
        />
    );
});
