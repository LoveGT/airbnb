import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
class HYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    // this.instance.interceptors.request.use(
    //   (config) => {
    //     return config;
    //   },
    //   (error) => {
    //     return error;
    //   }
    // );
    this.instance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  }

  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }
  
  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new HYRequest(BASE_URL, TIMEOUT);
