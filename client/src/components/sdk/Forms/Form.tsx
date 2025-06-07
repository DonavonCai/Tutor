import { memo, ReactElement } from "react";
import { ITakeCssClasses } from "../types";
import { useCombineCssClasses } from "../../../api/use-combine-css-classes";

import "./Form.scss";

interface IProps extends ITakeCssClasses {
    children: ReactElement[];
}

export const Form = memo((props: IProps) => {
    const { children, cssClasses } = props;

    const classes = useCombineCssClasses("Form", cssClasses);

    return <form className={classes}>{children}</form>;
});
