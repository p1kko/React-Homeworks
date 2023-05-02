import { Component } from "react";
import style from "./Card.module.scss";
import { ReactComponent as Fav } from "./star.svg";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFav: false,
      openModal: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isFav } = this.state;
    this.setState({ isFav: !isFav });
    localStorage.setItem("Fav", !isFav);
  }

  render() {
    const { isFav } = this.state;
    return (
      <div className={style.card}>
        <h5>{this.props.title}</h5>
        <img
          src={this.props.imagePath}
          width={100}
          height={100}
          alt={this.props.title}
        />
        <div className={style.cardInfoWrapper}>
          <div>
            <p>Артикул: {this.props.sku}</p>
            <p>Колір: {this.props.color}</p>
            <p>Ціна: {this.props.price} грн.</p>
          </div>

          <button>Add to Cart</button>
          <Fav
            fill={isFav ? "#F2C94C" : "none"}
            className={style.Favor}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default Card;
