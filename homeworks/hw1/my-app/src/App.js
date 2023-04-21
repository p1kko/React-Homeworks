import styles from "./App.module.scss";
import { Component } from "react";
import Modal from "./Modal/Modal";
import Button from "./Button/Button";

const modals = [
  {
    id: 1,
    backgroundColor: "#3F3CFF",
    header: "First Modal",
    text: "I am the first modal",
    actions: (
      <div>
        <button  style={{ backgroundColor: '#006262'}} type="submit">Yes</button>
        <button  style={{ backgroundColor: '#006262'}} type="submit">No</button>
      </div>
    ),
    closeButton: true,
  },

  {
    id: 2,
    backgroundColor: "#FF3240",
    header: `Do you want to delete this file?`,
    text: `Once you delete this file, it won't be possible to undo this action. Are you sure you want to delete it?`
     ,
    actions: (
      <div>
        <button type="submit">Yes</button>
        <button type="submit">No</button>
      </div>
    ),
    closeButton: true,
  },
];

class App extends Component {
  state = {
    openModal: false,
  };

  openModal = (i) => {
    const index = modals.findIndex((el) => i === el.id);
    const modal = modals[index];
    this.setState({ openModal: modal });
  };

  closeModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    const { header, text, backgroundColor, closeButton, actions, id } =
      this.state.openModal;

    return (
      <div className={styles.App}>
        <Button
          onClick={() => {
            this.openModal(1);
          }}
          backgroundColor="#15B23F"
          text="Open first modal"
        />

        <Button
          onClick={() => {
            this.openModal(2);
          }}
          backgroundColor="#B2261C"
          text="Open second modal"
        />

        {this.state.openModal && (
          <Modal
            openModal={this.openModal}
            closeModal={this.closeModal}
            header={header}
            text={text}
            backgroundColor={backgroundColor}
            closeButton={closeButton}
            actions={actions}
            id={id}
          />
        )}
      </div>
    );
  }
}

export default App;
