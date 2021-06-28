import { makeRequest } from './../index';
export const apiHealth = {
    async getHealth() {
        const responce = await makeRequest("/health");
        return await responce.text();
    }
}
