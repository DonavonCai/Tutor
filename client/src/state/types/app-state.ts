import { ILessonOverview } from "../../types/lessons";

export interface ITokenState {
    accessToken: string;
    refreshToken: string;
}

export interface ILessonPlanState {
    plans: ILessonOverview[];
}

export interface IAppState {
    tokenState: ITokenState;
    planState: ILessonPlanState;
}
