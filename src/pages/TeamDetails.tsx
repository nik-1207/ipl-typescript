import { useEffect, useState } from "react";
import BannerStyle from "../styles/BannerStyle";
import Container from "../styles/PlayerContainerStyles";
import PlayerCard from "../components/PlayerCard";
import axiosCall from "../api/axios";

function TeamDetails() {
  const teamName = window.location.pathname.slice(7);
  const Bstyle = BannerStyle();
  const style = Container();
  const [TeamData, setTeamData] = useState({ players: [] });
  const { players } = TeamData;
  useEffect(() => {
    axiosCall(setTeamData, teamName);
  }, [teamName]);
  return (
    <>
      {TeamData.players && (
        <>
          <div className={Bstyle[`${teamName}-banner`]}>
            <div className={Bstyle[`${teamName}-overlay`]}>
              <div className={Bstyle[`${teamName}-overlay-img`]}></div>
            </div>
          </div>
          <div className={style.teamContainer}>
            {players.map((item: any) => {
              return (
                <PlayerCard
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
    </>
  );
}

export default TeamDetails;
