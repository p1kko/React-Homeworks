import React, { Component } from "react";
import Card from "../Card/Card";
import style from "./CardList.module.scss";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    fetch("db.json")
      .then((response) => response.json())
      .then((cards) => this.setState({ cards }));
  }

  render() {
    const { cards } = this.state;
    return (
      <div>
        <div className={style.cardList}>
          {cards.map((card) => (
            <Card
              key={card.sku}
              title={card.title}
              imagePath={card.imagePath}
              sku={card.sku}
              color={card.color}
              price={card.price}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CardList;
