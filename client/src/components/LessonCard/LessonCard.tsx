import { ReactElement } from "react";

import { Card } from "../sdk";
import "./LessonCard.scss";

export function LessonCard(): ReactElement {
    return (
        <Card cssClasses={["LessonCard"]}>
            <p>Hi</p>
        </Card>
    );
}
