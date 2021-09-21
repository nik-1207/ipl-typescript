import axios from "axios";
import { LoadingEvent } from "../event/LoadingEvent";
import { publish } from "../pubsub/PubSub";
import URL from "../config/UrlMap";
export default async function getAllTeamData(callBackData, teamName)
{
  const url=URL[teamName]
  if(url)
  {
    await axios.get(url).then((res) => {
      callBackData(res.data);
    });
  }
  else{
    callBackData("Invalid Path")
  }

}

axios.interceptors.request.use(
  function (config) {
    publish(new LoadingEvent({ isLoading: true }));
    return config;
  },
  function (error) {
    publish(new LoadingEvent({ isLoading: false }));
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    publish(new LoadingEvent({ isLoading: false }));
    return response;
  },
  function (error) {
    publish(new LoadingEvent({ isLoading: false }));
    return Promise.reject(error);
  }
);