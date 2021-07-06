export const config = {
    baseUrl: "",
    accessToken: ""
}

export const setAccessToken = (accessToken: string): void => { 
    config.accessToken = accessToken 
}
