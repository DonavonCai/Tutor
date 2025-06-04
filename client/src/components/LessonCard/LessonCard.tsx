import { ReactElement } from "react";

import { Card } from "../sdk";
import "./LessonCard.scss";
import { ILessonOverview } from "../../types/lessons";

interface IProps {
    plan: ILessonOverview;
}

export function LessonCard(props: IProps): ReactElement {
    const { plan } = props;
    return (
        <Card cssClasses={["LessonCard"]}>
            <p>{plan.title}</p>
        </Card>
    );
}
