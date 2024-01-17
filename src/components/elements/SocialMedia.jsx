import React from "react";

//styles
import styles from "./SocialMedia.module.css";

//elements
import Discord from "../../assets/icons/Discord";
import X from "../../assets/icons/X";

function SocialMedia() {
  return (
    <div className={styles.container}>
      <a href="#">
        <Discord />
      </a>
      <a href="#">
        <X />
      </a>
    </div>
  );
}

export default SocialMedia;
