import { config } from "./config";
import { makeRequest } from './makeRequest';
import { apiHealth } from "./rest/health";

export const setBaseUrl = (baseUrl: string) => {
    config.baseUrl = baseUrl;
}

export { makeRequest };

export { apiHealth };
