import React from "react";

//styles
import styles from "./modal.module.css";

function Modal() {
  return (
    <div className={styles.modal}>
      <h3>To Stake Your Furry, Please Connect Your Wallet.</h3>
      <p>Staking Your Furry Will Reward You $Fur Token.</p>
      <div className={styles.row}>
        <span>—— / 4567 Staked</span>
        <span>% of totally supply</span>
      </div>
      <button>Connect Wallet</button>
    </div>
  );
}

export default Modal;
