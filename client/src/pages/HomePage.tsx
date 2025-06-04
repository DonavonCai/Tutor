import { ReactElement, useCallback, useEffect } from "react";
import { getLessons, IGetLessonsResponse } from "../services/get-lessons";
import { useService } from "../api/use-service";
import { Page } from "./Page";
import { useDispatch, useSelector } from "react-redux";
import { getPlans } from "../state/store";
import { savePlans } from "../state/slices/create-plan-slice";
import { LessonCardsContainer } from "../components/LessonCard/LessonCardsContainer";

export function HomePage(): ReactElement {
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
