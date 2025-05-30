import { ILessonPlanState } from "../types/app-state";

export function initializePlanState(): ILessonPlanState {
    return {
        plans: [],
    };
}
