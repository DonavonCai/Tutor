import { UnknownAction } from "@reduxjs/toolkit";
import { ILessonOverview } from "../../types/lessons";

export interface ISavePlanAction extends UnknownAction {
    payload: ILessonOverview[];
}
