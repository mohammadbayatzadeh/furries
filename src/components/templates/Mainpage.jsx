import React from "react";

//elements
import Modal from "../modules/Modal";
import SocialMedia from "../elements/SocialMedia";

//styles
import styles from "./MainPage.module.css";

function Mainpage() {
  return (
    <div className={styles.container}>
      <Modal />
      <SocialMedia />
    </div>
  );
}

export default Mainpage;
