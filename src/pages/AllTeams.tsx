import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axiosCall from "../api/axios";
import LogoMap from "../config/LogoMap";
import Card from "../components/TeamCard";
import ContainerStyle from "../styles/TeamContainerStyle";

interface teamDataType {
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
  const data = TeamData as [teamDataType];
  return (
    <>
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
    </>
  );
}

export default CardContainer;
