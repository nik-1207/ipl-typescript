import { createUseStyles } from "react-jss";

interface map{
    [key:string]:any
}
const data:map={
    playerCard: {
        width: "300px",
        margin: "15px",
        alignItems: "center",
        boxShadow: "12px 15px 10px #00000030",
        borderRadius: "10px",
        "&:hover": {
          cursor:"pointer"
        },
      },
      playerDetail: {
        textAlign: "center",
        textTransform: " capitalize",
        fontFamily: "sans-serif",
      },
      name: {
        fontSize: " 2rem",
        lineHeight: ".91",
        fontWeight: "500",
      },
      stats: {
        listStyle: "none",
        border: "none",
        display: "flex",
        marginLeft: "-13%",
      },
      listItem: {
        display: "list-item",
        margin: "0px 7px",
        textAlign: "-webkit-match-parent",
      },
      value:{
        fontSize:" 1rem",
        fontWeight: "900",
        lineHeight: "1.22",
      },
      label:{
        letterSpacing:" .2rem",
        textTransform: "uppercase",
        color: "#010000b0"
      },
      button:{
        background:" transparent",
        border: "0",
        outline: "0",
        marginTop: "10px",
        marginBottom: "10px",
        padding: "5px",
        fontSize: "1.2rem",
        fontWeight: "900",
        textTransform:" uppercase",
        width: "100%",
      },
        "chennai-super-kings": {
            width: "100%",
            height: "300px",
            background: "linear-gradient(136deg, rgb(253, 185, 19), rgb(248, 92, 0))",
          },
          "delhi-capitals": {
            width: "100%",
            height: "300px",
            background: "linear-gradient(136deg, #004c93, #0358a7)",
          },
          "kings-xi-punjab": {
            width: "100%",  
            height: "300px",
            background: " linear-gradient(136deg, #aa4545, #740f0b)",
          },
          "kolkata-knight-riders": {
            width: "100%",
            height: "300px",
            background: "linear-gradient(136deg, #70458f, #3d2057)",
          },
          "mumbai-indians": {
            width: "100%",
            height: "300px",
            background: "linear-gradient(136deg, #005da0, #003a63)",
          },
          "rajasthan-royals": {
            width: "100%",
            height: "300px",
            background: " linear-gradient(136deg, #2d4d9d, #172e5e)",
          },
          "royal-challengers-bangalore": {
            width: "100%",
            height: "300px",
            background: " linear-gradient(136deg, #000, #464646)",
          },
          "sunrisers-hyderabad": {
            width: "100%",
            height: "300px",
            background: "linear-gradient(136deg, #fb643e, #b81c25)",
          },
    
}
const PlayerCard = createUseStyles(data);
export default PlayerCard;