import { memo, useId } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import "../../../styles/styles.scss";
import { ITakeCssClasses, useCombineCssClasses } from "@utils";

interface IProps
    extends React.DetailedHTMLProps<
            React.InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
        >,
        ITakeCssClasses {
    labelText: string;
    register?: UseFormRegisterReturn;
}

export const TextInput = memo((props: IProps) => {
    const { labelText, register, cssClasses, ...passThroughProps } = props;

    // Generate a unique ID for the element
    const uniqueId = useId();

    const classes = useCombineCssClasses("_Input", "TextInput", cssClasses);

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
