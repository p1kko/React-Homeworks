import styles from "./App.module.scss";
import { Component } from "react";

import Header from "./Header/Header";
import CardList from "./CardList/CardList";

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <CardList />
      </div>
    );
  }
}

export default App;
