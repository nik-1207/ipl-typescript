import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import TeamCardStyle from "../styles/TeamCardStyle";
import TeamCardColour from "../styles/TeamCardColour";

function Card(props:{img:string,data:{id:string,teamName:string, venue:string, winningYears:[]}})
{
    
  const { img, data } = props;
  const history= useHistory<unknown>();
  const style:{teamCard:string,image:string,tab:string,teamName:string,venue:string,win:string,teamHome:string,arrow:string} = TeamCardStyle();
  const colour:{[key:string]:string}=TeamCardColour();

  const clickHandler= useCallback(() => {
    history.push(`teams/${data.id}`);
  }, [data, history]);

  return (
    <div
      className={`${style.teamCard} ${colour[data.id]}`}
      onClick={clickHandler}
    >
      <img className={style.image} src={img} alt="team-logo" />
      <div className={style.tab}>
        <h2 className={style.teamName}>{data.teamName}</h2>
        <h4 className={style.venue}>{data.venue}</h4>
        {data.winningYears.length ? (
          <div className={style.win}>
            <i className="fas fa-trophy">
              {data.winningYears.map((item:any) => {
                return `  ${item}  `;
              })}
            </i>
          </div>
        ) : (
          <></>
        )}
      </div>
      <p className={style.teamHome}> Team Home</p>
      <i className={`fas fa-angle-right tab-arrow ${style.arrow}`}></i>
    </div>
  );
}

export default Card;