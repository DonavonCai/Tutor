import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { IAppState } from "./types/app-state";

//#region Import slices
import { tokenSlice } from "./slices/create-token-slice";
//#endregion

const rootReducer = combineSlices(tokenSlice);

export const store = configureStore({
    reducer: rootReducer,
});

//#region Export reducers
export { setAccessToken } from "./slices/create-token-slice";
//#endregion

//#region Export selectors
export { getAccessToken } from "./slices/create-token-slice";
//#endregion

export type AppState = IAppState;
export type AppDispatch = typeof store.dispatch;
