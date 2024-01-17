import React from "react";

//styles
import styles from "./Header.module.css";

//icons
import Logo from "../../assets/icons/logo.png";
import Staking from "../../assets/icons/Staking";
import DApp from "../../assets/icons/DApp";
import Epoch from "../../assets/icons/Epoch";
import Creator from "../../assets/icons/Creator";
import NavItem from "../elements/NavItem";

function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} className={styles.logo} />
      <nav>
        <input type="checkbox" id="menu-toggle" className={styles.checkbox} />
        <label className={styles.hamburger} htmlFor="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul className={styles.nav}>
          <NavItem title="Staking" icon={<Staking />} link="/staking" />
          <NavItem title="Creator house" icon={<Creator />} link="/creator" />
          <NavItem title="DApp" icon={<DApp />} link="/dapp" />
          <NavItem title="Epoch clash" icon={<Epoch />} link="/epoch" />
        </ul>
      </nav>
      <button>
        <span>Connect Wallet</span>
      </button>
    </header>
  );
}

export default Header;
