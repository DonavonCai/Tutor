import { memo, useId } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { ITakeCssClasses, useCombineCssClasses } from "@utils";

interface IProps
    extends React.DetailedHTMLProps<
            React.TextareaHTMLAttributes<HTMLTextAreaElement>,
            HTMLTextAreaElement
        >,
        ITakeCssClasses {
    labelText: string;
    register?: UseFormRegisterReturn;
}

export const TextAreaInput = memo((props: IProps) => {
    const { labelText, register, cssClasses, ...passThroughProps } = props;

    // Generate a unique ID for the element
    const uniqueId = useId();

    const classes = useCombineCssClasses("_Input", "TextAreaInput", cssClasses);

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
