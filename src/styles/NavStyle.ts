import { createUseStyles } from "react-jss";

const NavStyle = createUseStyles({
  logoImage: {
    height: "50px",
    width: "40px",
    margin: "15px",
  },
  navbar: {
    backgroundColor: "#122a77",
    display: "flex",
    boxShadow: "0px 4px 8px hsla(0, 0%, 7%, .5)",
    color: "white",
    width: "100%",
  },
  navHeading: {
    width: "min-content",
    marginTop: "13px",
    fontSize: "1em",
  },
});
export default NavStyle;
