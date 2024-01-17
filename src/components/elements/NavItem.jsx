import React from "react";
import { Link, useLocation } from "react-router-dom";

//styles
import styles from "./navitem.module.css";

function NavItem({ link = "#", title, icon }) {
  const { pathname } = useLocation();
  return (
    <li
      className={
        pathname === "/" + title.split(" ")[0].toLowerCase()
          ? `${styles.item} ${styles.active}`
          : styles.item
      }
    >
      <div className={styles.row}>
        {icon}
        <Link to={link}>{title}</Link>
      </div>
      {pathname === "/" + title.split(" ")[0].toLowerCase() && (
        <span className={styles.border}></span>
      )}
    </li>
  );
}

export default NavItem;
