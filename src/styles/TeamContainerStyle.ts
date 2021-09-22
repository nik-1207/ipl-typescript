import { createUseStyles } from "react-jss";

const CONTAINER_STYLE = createUseStyles({
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
});
export default CONTAINER_STYLE;