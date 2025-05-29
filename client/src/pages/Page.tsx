import { ReactElement } from "react";

interface IProps {
    children?: ReactElement;
}

export function Page(props: IProps): ReactElement {
    const { children } = props;
    return <div className="Page">{children}</div>;
}
