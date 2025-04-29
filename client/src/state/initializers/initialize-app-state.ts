import { IAppState } from "../types/app-state";
import { initializeTokenState } from "./token-state";

export function initializeAppState(): IAppState {
    return {
        tokenState: initializeTokenState(),
    };
}
