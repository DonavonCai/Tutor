import { ReactElement } from "react";
import { ILessonOverview } from "../../types/lessons";
import { LessonCard } from "./LessonCard";
import { v4 as getUuid } from "uuid";

interface IProps {
    plans: ILessonOverview[];
}

export function LessonCardsContainer(props: IProps): ReactElement {
    const { plans } = props;

    return (
        <>
            {plans.map((plan: ILessonOverview) => {
                return <LessonCard plan={plan} key={getUuid()} />;
            })}
        </>
    );
}
