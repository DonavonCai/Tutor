import { HttpStatusCode } from "axios";
import apiClient from "./api-client";

const apiEndpoint = "/api/test/";

export const getTestService = async () => {
    try {
        const response = await apiClient.post(apiEndpoint, { prompt: "test" });
        if (response.status === HttpStatusCode.Ok) {
            return response.data;
        }
    } catch (e) {
        alert(e);
    }
};
