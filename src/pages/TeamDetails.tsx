import React, { useEffect, useState } from "react";
// import Banner from "../components/Banner";
import axiosCall from "../api/axios";
import Container from "../styles/PlayerContainerStyles";
import PlayerCard from "../components/PlayerCard";

function TeamDetails() {
  const teamName = window.location.pathname.slice(7);
  const style = Container();
  const [TeamData, setTeamData] = useState({players:[]});
  const {players}=TeamData
  useEffect(() => {
      axiosCall(setTeamData, teamName);
  }, [teamName]);
  return (
    <>
              {/* <Banner teamName={teamName} /> */}
      {TeamData.players && (
        <>
          <div className={style.teamContainer}>
            {players.map((item:any) => {
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