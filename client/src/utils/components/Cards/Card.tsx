import { ReactElement, memo } from "react";

import "./Card.scss";
import { useCombineCssClasses } from "../../api/use-combine-css-classes";
import { ITakeCssClasses } from "../../types";

interface IProps extends ITakeCssClasses {
    children: ReactElement;
    title: string;
}

export const Card = memo((props: IProps) => {
    const { title, children, cssClasses } = props;

    const classes = useCombineCssClasses("Card", cssClasses);
    return (
        <article className={classes}>
            <header className="CardTitle">{title}</header>
            {children}
        </article>
    );
});
