import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import axiosCall from "../api/ApiCall";
import BannerStyle from "../styles/BannerStyle";
import Container from "../styles/PlayerContainerStyles";
const PlayerCard = lazy(() => import("../components/PlayerCard"));
interface TeamDataMap {
  players: [
    {
      id: string;
      image: string;
      name: string;
      nationality: string;
      stats: { [key: string]: number };
    }
  ];
  team: { [key: string]: string };
}

function TeamDetails() {
  const teamName: string = window.location.pathname.slice(7);
  const Bstyle: { [key: string]: string } = BannerStyle();
  const style: { teamContainer: string } = Container();
  const [TeamData, setTeamData]: [unknown, Dispatch<SetStateAction<unknown>>] =
    useState();
  useEffect(() => {
    axiosCall(setTeamData, teamName);
  }, [teamName]);
  const data = TeamData as TeamDataMap;
  return (
    <Suspense
      fallback={
        <div className={"loader"}>
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
      }
    >
      {data && (
        <>
          <div className={Bstyle[`${teamName}-banner`]}>
            <div className={Bstyle[`${teamName}-overlay`]}>
              <div className={Bstyle[`${teamName}-overlay-img`]} />
            </div>
          </div>
          <div className={style.teamContainer}>
            {data.players.map((item) => {
              return (
                <PlayerCard
                  data-testid="cards"
                  teamName={teamName}
                  key={item.id}
                  img={item.image}
                  name={item.name}
                  matches={item.stats.matches}
                  runs={item.stats.runs}
                  wickets={item.stats.wickets}
                />
              );
            })}
          </div>
        </>
      )}
    </Suspense>
  );
}

export default TeamDetails;
