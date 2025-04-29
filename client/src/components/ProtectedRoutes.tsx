import { ReactNode, useEffect, memo } from "react";
import { Navigate } from "react-router";
import { jwtDecode, JwtPayload } from "jwt-decode";
import apiClient from "../services/api-client";
import { useCallback, useState } from "react";
import { AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken, setAccessToken } from "../state/store";
import { IAppState } from "../state/types/app-state";

interface IProps {
    children: ReactNode;
}

export const ProtectedRoute = memo((props: IProps) => {
    const { children } = props;
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    const refreshToken = "";
    const accessToken = useSelector((state: IAppState) =>
        getAccessToken(state)
    );

    const dispatch = useDispatch();

    //#region Refresh token callback
    const refresh = useCallback(async () => {
        try {
            const response: AxiosResponse = await apiClient.post(
                "/api/token/refresh",
                {
                    refresh: refreshToken,
                }
            );
            if (response.status === 200) {
                console.log("");
                dispatch(setAccessToken(response.data.access));
                // localStorage.setItem(ACCESS_TOKEN, response.data.access);
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }
        } catch (e) {
            setIsAuthorized(false);
            console.log(e);
        }
    }, []);
    //#endregion

    //#region Authorization callback
    const auth = useCallback(async () => {
        if (!accessToken) {
            setIsAuthorized(false);
            return;
        }

        const decoded: JwtPayload = jwtDecode(accessToken);

        const tokenExpiration = decoded.exp as number;
        if (tokenExpiration < Date.now() / 1000) {
            await refresh();
        } else {
            setIsAuthorized(true);
        }
    }, [accessToken, refresh]);
    //#endregion

    // Authorize on mount
    useEffect(() => {
        auth().catch(() => setIsAuthorized(false));
    });

    if (isAuthorized === null) {
        return <div>...Loading</div>;
    }

    return isAuthorized ? children : <Navigate to="/login" />;
});

export default ProtectedRoute;
