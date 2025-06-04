import { createSlice } from "@reduxjs/toolkit";
import { ILessonPlanState } from "../types/app-state";
import { initializePlanState } from "../initializers/initialize-plan-state";
import { ISavePlanAction } from "../types/actions";

export const planSlice = createSlice({
    name: "planState",
    initialState: initializePlanState(),
    reducers: {
        savePlans: (state: ILessonPlanState, action: ISavePlanAction) => {
            state.plans = action.payload;
        },
    },
    selectors: {
        getPlans: (state: ILessonPlanState) => {
            return state.plans;
        },
    },
});

export const { savePlans } = planSlice.actions;
export const { getPlans } = planSlice.selectors;
