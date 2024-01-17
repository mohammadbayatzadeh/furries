import React from "react";

//styles
import styles from "./Header.module.css";

//icons
import Logo from "../../assets/icons/logo.png";
import Staking from "../../assets/icons/Staking";
import DApp from "../../assets/icons/DApp";
import Epoch from "../../assets/icons/Epoch";
import Creator from "../../assets/icons/Creator";

function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} className={styles.logo} />
      <nav>
        <ul className={styles.nav}>
          <li>
            <Staking />
            <a href="#">Staking</a>
          </li>
          <li>
            <Creator />
            <a href="#">Creator house</a>
          </li>
          <li>
            <DApp />
            <a href="#">DApp</a>
          </li>
          <li>
            <Epoch />
            <a href="#">Epoch clash</a>
          </li>
        </ul>
      </nav>
      <button>
        <span>Connect Wallet</span>
      </button>
    </header>
  );
}

export default Header;
