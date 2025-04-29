import { ITokenState } from "../types/app-state";

export function initializeTokenState(): ITokenState {
    return {
        refreshToken: "",
        accessToken: "",
    };
}
