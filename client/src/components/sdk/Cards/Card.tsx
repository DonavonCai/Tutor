import { ReactElement, memo } from "react";

import "./Card.scss";
import { useCombineCssClasses } from "../../../api/use-combine-css-classes";

interface IProps {
    children: ReactElement;
    title: string;
    cssClasses?: string[];
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
