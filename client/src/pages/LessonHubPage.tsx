import { ReactElement, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useService } from "@utils";
import { LessonCardsContainer } from "../components/LessonCard/LessonCardsContainer";
import { IGetLessonsResponse, getLessons } from "../services/get-lessons";
import { getPlans, savePlans } from "../state/store";
import { Page } from "./Page";

export function LessonHubPage(): ReactElement {
    const dispatch = useDispatch();
    const plans = useSelector(getPlans);

    const onSuccess = useCallback(
        (response: IGetLessonsResponse) => {
            dispatch(savePlans(response.plans));
        },
        [dispatch]
    );

    const [executeGetLessons, loading] = useService(getLessons, onSuccess);
    useEffect(() => {
        executeGetLessons({
            prompt: "blah",
        });
    }, [executeGetLessons]);

    return loading ? (
        <Page />
    ) : (
        <Page>{!loading && <LessonCardsContainer plans={plans} />}</Page>
    );
}
