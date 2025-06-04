import axios, { AxiosResponse, HttpStatusCode } from "axios";
import apiClient from "./api-client";
import { ILessonOverview } from "../types/lessons";

const apiEndpoint = "/api/test/";

export interface IGetLessonsRequest {
    prompt: string;
}

export interface IGetLessonsResponse {
    plans: ILessonOverview[];
}

export const getLessons = async (): Promise<IGetLessonsResponse> => {
    try {
        const response: AxiosResponse<IGetLessonsResponse, IGetLessonsRequest> =
            await apiClient.post(apiEndpoint, { prompt: "test" });
        if (response.status === HttpStatusCode.Ok) {
            return response.data;
        }
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message);
        }
        throw new Error("Something went wrong.");
    }
    throw new Error("This will never happen.");
};
