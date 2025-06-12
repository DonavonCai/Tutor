import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { IAppState } from "./types/app-state";

//#region Import slices
import { tokenSlice } from "./slices/create-token-slice";
import { planSlice } from "./slices/create-plan-slice";
//#endregion

const rootReducer = combineSlices(tokenSlice, planSlice);

export const store = configureStore({
    reducer: rootReducer,
});

//#region Export reducers
export { setAccessToken } from "./slices/create-token-slice";
export { savePlans } from "./slices/create-plan-slice";
//#endregion

//#region Export selectors
export { getAccessToken } from "./slices/create-token-slice";
export { getPlans } from "./slices/create-plan-slice";
//#endregion

export type AppState = IAppState;
export type AppDispatch = typeof store.dispatch;
