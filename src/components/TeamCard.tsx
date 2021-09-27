import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import TeamCardColour from "../styles/TeamCardColour";
import TeamCardStyle from "../styles/TeamCardStyle";
interface TeamDataType {
  img: string;
  id: string;
  teamName: string;
  venue: string;
  winningYears: [number];
}
interface TeamCardStyleType {
  teamCard: string;
  image: string;
  tab: string;
  teamName: string;
  venue: string;
  win: string;
  teamHome: string;
  arrow: string;
}
interface TeamColourType {
  [key: string]: string;
}
function Card(props: TeamDataType) {
  const { img, id, teamName, venue, winningYears } = props;
  const history = useHistory<unknown>();
  const style: TeamCardStyleType = TeamCardStyle();
  const colour: TeamColourType = TeamCardColour();

  const clickHandler = useCallback(() => {
    history.push(`teams/${id}`);
  }, [id, history]);

  return (
    <div
      data-testid="cards"
      className={`${style.teamCard} ${colour[id]}`}
      onClick={clickHandler}
    >
      <img className={style.image} src={img} alt="team-logo" />
      <div className={style.tab}>
        <h2 className={style.teamName}>{teamName}</h2>
        <h3 className={style.venue}>{venue}</h3>
        {winningYears.length ? (
          <div className={style.win}>
            <i className="fas fa-trophy">
              {winningYears.map((item: number) => {
                return `  ${item}  `;
              })}
            </i>
          </div>
        ) : (
          <></>
        )}
      </div>
      <p className={style.teamHome}> Team Home</p>
      <i className={`fas fa-angle-right tab-arrow ${style.arrow}`} />
    </div>
  );
}

export default Card;
