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
  function (config: AxiosRequestConfig) {
    publish(new LoadingEvent(true));
    return config;
  },
  function (error: unknown) {
    publish(new LoadingEvent(false));
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    publish(new LoadingEvent(false));
    return response;
  },
  function (error) {
    publish(new LoadingEvent(false));
    return Promise.reject(error);
  }
);
