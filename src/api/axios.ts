import axios, { AxiosRequestConfig } from "axios";
import { LoadingEvent } from "../event/LoadingEvent";
import { publish } from "../config/PubSub";
import URL from "../config/UrlMap";
import { Dispatch, SetStateAction } from "react";
export default async function getAllTeamData(
  callBackData: Dispatch<SetStateAction<unknown>>,
  teamName: string
) {
  const url: string = URL[teamName];
  if (url) {
    await axios.get(url).then((res) => {
      callBackData(res.data);
    });
  } else {
    callBackData("invalid  url");
  }
}

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    publish(new LoadingEvent(true));
    return config;
  },
  (error: unknown) => {
    publish(new LoadingEvent(false));
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    publish(new LoadingEvent(false));
    return response;
  },
  (error) => {
    publish(new LoadingEvent(false));
    return Promise.reject(error);
  }
);
