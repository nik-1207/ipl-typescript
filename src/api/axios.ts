import axios from "axios";
import { LoadingEvent } from "../event/LoadingEvent";
import { publish } from "../config/PubSub";
import URL from "../config/UrlMap";
export default async function getAllTeamData(callBackData:any, teamName:string)
{
  const url=URL[teamName]
  if(url==='https://ipl-t20.herokuapp.com/teams')
  {

    await axios.get(url).then((res) => {
      callBackData(res.data);
    }).catch(()=>
    {
      callBackData("Blocked Url")
    });
  }else if(url)
  {
    await axios.get(url).then((res) => {
      callBackData(res.data);
    }).catch(()=>
    {
      callBackData({players:["Blocked Url"]})
    })
  }
  else{
    callBackData("invalid  url")
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