import { axiosInstance } from "./axiosInstance";

export const postToURLSingle = {
  async postData(url, value) {
    try {
      const response = await axiosInstance.post(url, {
        params: value,
      });
      return response?.data ? response?.data : response;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
};
