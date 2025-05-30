import { IAppState } from "../types/app-state";
import { initializePlanState } from "./initialize-plan-state";
import { initializeTokenState } from "./token-state";

export function initializeAppState(): IAppState {
    return {
        tokenState: initializeTokenState(),
        planState: initializePlanState(),
    };
}
