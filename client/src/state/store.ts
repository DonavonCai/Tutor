import { combineSlices, configureStore, createSlice } from "@reduxjs/toolkit";

import { initializeTokenState } from "./initializers/token-state";

import { IAppState } from "./types/app-state";

const tokenSlice = createSlice({
    name: "tokenState",
    initialState: initializeTokenState(),
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
    },
    selectors: {
        getAccessToken: (state) => state.accessToken,
    },
});

const rootReducer = combineSlices(tokenSlice);

export const store = configureStore({
    reducer: rootReducer,
});

export const { setAccessToken } = tokenSlice.actions;
export const { getAccessToken } = tokenSlice.selectors;

export type AppState = IAppState;
export type AppDispatch = typeof store.dispatch;
