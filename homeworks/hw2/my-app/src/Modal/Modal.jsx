import { Component } from "react";
import styles from "./Modal.module.scss";

class Modal extends Component {
  render() {
    const { closeModal, header, text, closeButton, backgroundColor, actions } =
      this.props;

    return (
      <div className={styles.modalContainer}>
        <div
          onClick={(e) => e.currentTarget === e.target && closeModal()}
          className={styles.background}
        >
        <div className={styles.content} style={{ backgroundColor }}>
          <div>
            <h4>{header}</h4>
            {closeButton && (
              <span
                onClick={() => {
                  closeModal();
                }}
              >
                X
              </span>
            )}
          </div>
          <p>{text}</p>
          {actions}
        </div>
      </div>
      // </div>
    );
  }
}

export default Modal;
