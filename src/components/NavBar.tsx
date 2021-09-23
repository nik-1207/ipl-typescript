import React from "react";
import NavStyle from "../styles/NavStyle";

import LOGO from "../assets/ipl-logo.png";

function Navbar() {
  const style = NavStyle();
  return (
    <nav title="navbar" className={style.navbar}>
      <img className={style.logoImage} src={LOGO} alt="ipl-logo" />
      <h1 title="heading" className={style.navHeading}>INDIAN PREMIRE LEAGUE</h1>
    </nav>
  );
}

export default Navbar;