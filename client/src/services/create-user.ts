import axios, { AxiosResponse, HttpStatusCode } from "axios";

export interface IRegisterResponse {
    success: boolean;
}

const url = "/api/user/register/";

interface IRegisterRequest {
    email: string;
    password: string;
}

export const createUser = async (
    request: IRegisterRequest
): Promise<IRegisterResponse> => {
    try {
        const response: AxiosResponse<IRegisterResponse, IRegisterRequest> =
            await axios.post(url, request, {
                baseURL: import.meta.env.VITE_API_URL,
            });

        if (response.status === HttpStatusCode.Ok) {
            return response.data;
        }
        throw new Error(
            "ERROR " + response.status + ": " + response.statusText
        );
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        }
        throw new Error("Something went wrong.");
    }
};
