import React, { Component } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { View } from "./components/View";
import { Modal } from "./components/Modal";
import { Notelist } from "./components/Notelist";
import axios from "axios";

class App extends Component {
  state = {
    noteInfo: {
      nickname: "",
      favouritemap: "",
      rank: "",
      telephone: "",
      role: "",
      moreinfo: "",
    },
    showModal: false,
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      noteInfo: { ...this.state.noteInfo, [e.target.name]: e.target.value },
    });
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

  postHandler = (e) => {
    e.target.parentNode.parentNode.children[1].style.pointerEvents = "auto";
    axios
      .post("http://localhost:3001/notes/", { ...this.state.noteInfo })
      .catch((err) => console.log(err));
    window.location.reload();
  };

  render() {
    return (
      <div className="app">
        {this.state.showModal && (
          <Modal
            cancel={this.handleSubmit}
            ok={this.postHandler}
            {...this.state.noteInfo}
          />
        )}
        <Form submit={this.handleSubmit} change={this.handleChange} />
        <View {...this.state.noteInfo} />
        <Notelist />
      </div>
    );
  }
}

export default App;
