import { ReactElement, useCallback, useEffect } from "react";
import { getLessons } from "../services/get-lessons";
import { useService } from "../api/use-service";
import { LessonCard } from "../components/LessonCard/LessonCard";
import { Page } from "./Page";

export function HomePage(): ReactElement {
    const onSuccess = useCallback(() => {}, []);

    const [executeGetLessons, loading] = useService(getLessons);
    useEffect(() => {
        executeGetLessons();
    }, [executeGetLessons]);

    return loading ? <Page /> : <Page>{!loading && <LessonCard />}</Page>;
}
