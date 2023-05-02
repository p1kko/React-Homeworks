import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    return (
      <div className={styles.headerFlex}>
        <div className={styles.logo}>
          <h1>Musica </h1>
          <img src="/img/Logo.png" alt="Logo" width={30} height={30} />
        </div>
        <div>
          <img
            src="/img/cart.svg"
            width={20}
            height={20}
            className={styles.favIcon}
            alt="User"
          />
          <img
            src="/img/favor.svg"
            width={20}
            height={20}
            className={styles.favIcon}
            alt="Favor"
          />
        </div>
      </div>
    );
  }
}

export default Header;
