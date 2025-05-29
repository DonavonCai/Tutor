import { ReactElement, memo } from "react";

import "./Card.scss";

interface IProps {
    children: ReactElement;
}

export const Card = memo((props: IProps) => {
    const { children } = props;
    return <div className="Card">{children}</div>;
});
