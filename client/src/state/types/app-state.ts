export interface ITokenState {
    accessToken: string;
    refreshToken: string;
}

export interface IAppState {
    tokenState: ITokenState;
}
