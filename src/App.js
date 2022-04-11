import React, { Component } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { View } from "./components/View";
import { Modal } from "./components/Modal";

class App extends Component {
  state = {
    nickname: "",
    favouritemap: "",
    rank: "",
    telephone: "",
    role: "",
    moreinfo: "",
    showModal: false,
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.showModal === false) {
      e.target.style.pointerEvents = "none";
      this.setState({ showModal: !this.state.showModal });
    } else {
      e.target.parentNode.parentNode.children[1].style.pointerEvents = "auto";
      this.setState({ showModal: !this.state.showModal });
    }
  };

  closeHandler = (e) => {
    e.target.parentNode.parentNode.children[1].style.pointerEvents = "auto";
    window.location.reload();
  };

  render() {
    return (
      <div className="app">
        {this.state.showModal && (
          <Modal
            cancel={this.handleSubmit}
            ok={this.closeHandler}
            {...this.state}
          />
        )}
        <Form submit={this.handleSubmit} change={this.handleChange} />
        <View {...this.state} />
      </div>
    );
  }
}

export default App;
