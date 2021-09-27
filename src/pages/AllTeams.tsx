import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axiosCall from "../api/ApiCall";
import Card from "../components/TeamCard";
import LogoMap from "../config/LogoMap";
import ContainerStyle from "../styles/TeamContainerStyle";

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
    <>
      {data && (
        <div className={style.cardcontainer}>
          {Object.keys(LogoMap).map((key: string, index: number) => {
            return (
              <Card
                data-testid="cards"
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
