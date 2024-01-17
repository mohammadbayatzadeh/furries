import React from "react";

//styles
import styles from "./Header.module.css";

// //icons
import Logo from "../../assets/icons/logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} className={styles.logo} />
      <nav>
        <ul className={styles.nav}>
          <li>
            <a href="#">Staking</a>
          </li>
          <li>
            <a href="#">Creator house</a>
          </li>
          <li>
            <a href="#">DApp</a>
          </li>
          <li>
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
