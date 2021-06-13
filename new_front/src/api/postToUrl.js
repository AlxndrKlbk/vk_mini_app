import {axiosInstance} from "./axiosInstance";


export const postToURLSingle = {
    async postData(url, data) {
        try {
            const response = await axiosInstance.post(url, data, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': 'application/json'
                },
                data: data
            });
            return response?.data ? response?.data : response;
        } catch (e) {
            console.error(e);
            throw e;
        }
    },
}
