import { ReactElement, useCallback, useMemo, useState } from "react";
import { Button, ITakeCssClasses, useCombineCssClasses } from "@utils";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./Paginator.scss";

interface IProps extends ITakeCssClasses {
    children: ReactElement[];
    cssClasses?: string[];
}

// TODO: might be a good candidate for memoization
export function Paginator(props: IProps): ReactElement {
    const { children, cssClasses } = props;

    const numPerPage = useMemo(() => 3, []);
    const [page, setPage] = useState<number>(0);
    const startIdx = useMemo(() => page * numPerPage, [numPerPage, page]);
    console.log(page);

    const incrementPage = useCallback(() => {
        const numPages = Math.ceil(children.length / numPerPage);
        const nextPage = page + 1;
        setPage(nextPage < numPages ? nextPage : 0);
    }, [children.length, numPerPage, page]);

    const decrementPage = useCallback(() => {
        const finalPage = Math.ceil(children.length / numPerPage) - 1;
        const prevPage = page - 1;
        setPage(prevPage < 0 ? finalPage : page - 1);
    }, [children.length, numPerPage, page]);

    const renderedChildren = children.slice(startIdx, startIdx + numPerPage);

    const classes = useCombineCssClasses("Paginator", cssClasses);

    return (
        <div className={classes}>
            <div className="paginatorButtons">
                <Button icon={faArrowLeft} onClick={decrementPage} />
                <Button icon={faArrowRight} onClick={incrementPage} />
            </div>
            <div className="paginatorChildren">{renderedChildren}</div>
        </div>
    );
}
