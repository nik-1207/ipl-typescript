import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import URL from "../config/UrlMap";
export default async function getData(
  callBackData: Dispatch<SetStateAction<unknown>>,
  teamName: string
) {
  const url: string = URL[teamName];
  try {
    const res = await axios.get(url);
    callBackData(res.data);
  } catch (err) {
    callBackData("invalid url");
  }
}
