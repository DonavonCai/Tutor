import { createSlice } from "@reduxjs/toolkit";
import { initializeTokenState } from "../initializers/token-state";

export const tokenSlice = createSlice({
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

export const { setAccessToken } = tokenSlice.actions;
export const { getAccessToken } = tokenSlice.selectors;
