import { ReactNode, useEffect, memo } from "react";
import { Navigate } from "react-router";
import { jwtDecode, JwtPayload } from "jwt-decode";
import api from "../api/api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { useCallback, useState } from "react";
import { AxiosResponse } from "axios";

interface IProps {
    children: ReactNode;
}

export const ProtectedRoute = memo((props: IProps) => {
    const { children } = props;
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    //#region Refresh token callback
    const refresh = useCallback(async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try {
            const response: AxiosResponse = await api.post(
                "/api/token/refresh",
                {
                    refresh: refreshToken,
                }
            );
            if (response.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
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
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthorized(false);
            return;
        }

        const decoded: JwtPayload = jwtDecode(token);

        const tokenExpiration = decoded.exp as number;
        if (tokenExpiration < Date.now() / 1000) {
            await refresh();
        } else {
            setIsAuthorized(true);
        }
    }, [refresh]);
    //#endregion

    // Authorize on mount
    useEffect(() => {
        auth().catch(() => setIsAuthorized(false));
    });

    if (isAuthorized === null) {
        return <div>...Loading</div>;
    }
    console.log(isAuthorized);

    return isAuthorized ? children : <Navigate to="/login" />;
});

export default ProtectedRoute;
