import { AxiosResponse, HttpStatusCode } from "axios";
import apiClient from "./api-client";
import { ILessonOverview } from "../types/lessons";

const apiEndpoint = "/api/test/";

interface IGetLessonsRequest {
    prompt: string;
}

export const getLessons = async () => {
    try {
        const response: AxiosResponse<ILessonOverview, IGetLessonsRequest> =
            await apiClient.post(apiEndpoint, { prompt: "test" });
        if (response.status === HttpStatusCode.Ok) {
            return response.data;
        }
    } catch (e) {
        alert(e);
    }
};
