import React from "react";

//elements
import Modal from "../modules/Modal";

//styles
import styles from "./Mainpage.module.css";

function Mainpage() {
  return (
    <div className={styles.container}>
      <Modal />
    </div>
  );
}

export default Mainpage;
