import axios, { AxiosRequestConfig } from "axios";
import { AxiosInterceptorManager } from "axios";

export default {
  get: jest.fn().mockResolvedValue({
    data: {},
  }),
};
