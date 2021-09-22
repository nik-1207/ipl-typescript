import { createUseStyles } from "react-jss";
interface map{
  [key:string]:{}
}
const data:map={
  cardcontainer: {
    display: "flex",
    flexWrap: " wrap",
    paddingLeft: " 1%",
  },
  " @media only screen and (max-width: 640px)": {
    cardcontainer: {
      flexDirection: "column",
      padding: "5px",
    },
  },
}
const CONTAINER_STYLE = createUseStyles(data);
export default CONTAINER_STYLE;