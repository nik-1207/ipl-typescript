import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import axiosCall from "../api/ApiCall";
import LogoMap from "../config/LogoMap";
import ContainerStyle from "../styles/TeamContainerStyle";
const Card = lazy(() => import("../components/TeamCard"));
interface TeamDataType {
  id: string;
  teamName: string;
  venue: string;
  winningYears: [number];
}
function CardContainer() {
  const teamName: string = window.location.pathname.slice(7);
  const style = ContainerStyle();
  const [TeamData, setTeamData]: [unknown, Dispatch<SetStateAction<unknown>>] =
    useState();
  useEffect(() => {
    axiosCall(setTeamData, teamName);
  }, [teamName]);
  const data = TeamData as [TeamDataType];
  return (
    <Suspense
      fallback={
        <div className={"loader"}>
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
      }
    >
      {data && (
        <div className={style.cardcontainer}>
          {Object.keys(LogoMap).map((key: string, index: number) => {
            return (
              <Card
                img={LogoMap[key]}
                key={index}
                id={data[index].id}
                teamName={data[index].teamName}
                venue={data[index].venue}
                winningYears={data[index].winningYears}
              />
            );
          })}
        </div>
      )}
    </Suspense>
  );
}

export default CardContainer;
