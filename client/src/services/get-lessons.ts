import axios, { AxiosResponse, HttpStatusCode } from "axios";
import apiClient from "./api-client";
import { ILessonOverview } from "../types/lessons";

export interface IGetLessonsRequest {
    prompt: string;
}

export interface IGetLessonsResponse {
    plans: ILessonOverview[];
}

const apiEndpoint = "/api/test/";

export const getLessons = async (): Promise<IGetLessonsResponse> => {
    try {
        const response: AxiosResponse<IGetLessonsResponse, IGetLessonsRequest> =
            await apiClient.post(apiEndpoint, { prompt: "test" });

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
