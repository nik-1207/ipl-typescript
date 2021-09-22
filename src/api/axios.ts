import axios from "axios";
import { LoadingEvent } from "../event/LoadingEvent";
import { publish } from "../config/PubSub";
import URL from "../config/UrlMap";
export default async function getAllTeamData(callBackData:any, teamName:string)
{
  const url=URL[teamName]
 if(url)
  {
    await axios.get(url).then((res) => {
      callBackData(res.data);
    })
  }
  else{
    console.log("claaed")
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