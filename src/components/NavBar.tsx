import React from "react";
import NavStyle from "../styles/NavStyle";

import LOGO from "../assets/ipl-logo.png";

function Navbar() {
  const style:{[key:string]:any} = NavStyle();
  return (
    <nav className={style.navbar}>
      <img className={style.logoImage} src={LOGO} alt="ipl-logo" />
      <h1 className={style.navHeading}>INDIAN PREMIRE LEAGUE</h1>
    </nav>
  );
}

export default Navbar;