import { ReactElement, memo } from "react";

import "./Card.scss";
import { useCombineCssClasses } from "../../../api/use-combine-css-classes";

interface IProps {
    children: ReactElement;
    cssClasses?: string[];
}

export const Card = memo((props: IProps) => {
    const { children, cssClasses } = props;

    const classes = useCombineCssClasses("Card", cssClasses);
    console.log(classes);
    return <div className={classes}>{children}</div>;
});
