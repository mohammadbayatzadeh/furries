import React from "react";

//modules
import Header from "./Header";

//styles
import styles from "./layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
