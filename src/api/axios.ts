import axios from "axios";
import { LoadingEvent } from "../event/LoadingEvent";
import { publish } from "../config/PubSub";
import URL from "../config/UrlMap";
import { Dispatch, SetStateAction } from "react";
export default async function getAllTeamData(callBackData:Dispatch<SetStateAction<unknown>>, teamName:string)
{console.log("called")
  const url=URL[teamName]
 if(url)
  {
    await axios.get(url).then((res) => {
      const data=res.data
      callBackData(data);
    })
  }
  else{
    callBackData("invalid  url")
  }

}

axios.interceptors.request.use(
  function (config) {
    publish(new LoadingEvent(true ));
    return config;
  },
  function (error) {
    publish(new LoadingEvent( false ));
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    publish(new LoadingEvent(false ));
    return response;
  },
  function (error) {
    publish(new LoadingEvent(false ));
    return Promise.reject(error);
  }
);