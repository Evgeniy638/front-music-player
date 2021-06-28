import { config } from "./config";

interface IOptionsMakeRequest {
    method?: string,
    headers?: HeadersInit,
    body?: BodyInit
}

export const makeRequest = (url: string, options?: IOptionsMakeRequest) => {
    const init :RequestInit = {}
    
    if (options) {
        init.method = options.method ?options.method :'GET';
    
        if (options.headers) {
            init.headers = options.headers;
        }
    
        if (options.body) {
            init.body = options.body;
        }
    }

    console.log(config.baseUrl + url);

    return fetch(config.baseUrl + url, init);
}
