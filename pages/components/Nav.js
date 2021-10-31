import React, { useState } from "react";
import styles from "../../styles/Nav.module.css";
import MenuIcon from "@material-ui/icons/Menu";
function Nav() {
  const [nav, setNav] = useState();
  // change background logic
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 8) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  // prevent error for using window in next js
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }

  const it = nav ? styles.navB : styles.nav;
  return (
    <div className={`${styles.nav} ${it}`}>
      <img className={styles.nav__logo} src="/stephenB.png" alt="" />
      <MenuIcon className={styles.nav__menu} />
    </div>
  );
}

export default Nav;
