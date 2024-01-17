import React from "react";

//styles
import styles from "./SocialMedia.module.css";

//elements
import Discord from "../../assets/icons/Discord";
import X from "../../assets/icons/X";

function SocialMedia() {
  return (
    <div className={styles.container}>
      <a href="https://discord.com/invite/Nt7f95bE32" target="_blank">
        <Discord />
      </a>
      <a href="https://twitter.com/FurriesFrens" target="_blank">
        <X />
      </a>
    </div>
  );
}

export default SocialMedia;
