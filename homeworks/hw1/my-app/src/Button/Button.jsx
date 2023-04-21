
import styles from "./Button.module.scss";
import {Component} from 'react'

class Button extends Component {
  render() {
    const { text, backgroundColor, onClick } = this.props;
    return (
      <button
        onClick={onClick}
        className={styles.mainButton}
        type="button"
        style={{ backgroundColor }}
      >
        {text}
      </button>
    );
  }
}

export default Button;


