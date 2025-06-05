import { ReactElement } from "react";

import { Card } from "../sdk";
import { ILessonOverview } from "../../types/lessons";
import { v4 as getUuid } from "uuid";

import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./LessonCard.scss";

interface IProps {
    plan: ILessonOverview;
}

export function LessonCard(props: IProps): ReactElement {
    const { plan } = props;
    const { title, sections } = plan;
    return (
        <Card cssClasses={["LessonCard"]} title={title}>
            <div className="lessonContentsContainer">
                {sections.map((section: string) => {
                    return (
                        <div className="lessonContents" key={getUuid()}>
                            <FontAwesomeIcon icon={faCircle} size="2xs" />
                            <p>{section}</p>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
}
