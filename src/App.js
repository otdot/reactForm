import React, { Component } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { View } from "./components/View";
import { Modal } from "./components/Modal";
import { Notelist } from "./components/Notelist";
import { UpdateForm } from "./components/UpdateForm";
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
    showUpdateModal: false,
    updateNote: {
      id: "",
      nickname: "",
      favouritemap: "",
      rank: "",
      telephone: "",
      role: "",
      moreinfo: "",
    },
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

  showUpdateHandler = (note) => {
    this.setState({
      updateNote: note,
      showUpdateModal: !this.state.showUpdateModal,
    });
  };

  updateHandler = (id) => {
    axios
      .put(`http://localhost:3001/notes/${id}`, this.state.updateNote)
      .then((res) => res.data);
  };

  handleUpdateNote = (e) => {
    e.preventDefault();
    this.setState({
      updateNote: { ...this.state.updateNote, [e.target.name]: e.target.value },
    });
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
        <Form
          text="Send"
          submit={this.handleSubmit}
          change={this.handleChange}
        />
        <View {...this.state.noteInfo} />
        <Notelist update={this.showUpdateHandler} />
        {this.state.showUpdateModal && (
          <UpdateForm
            text="Update note"
            {...this.state.updateNote}
            submit={() => this.updateHandler(this.state.updateNote.id)}
            change={this.handleUpdateNote}
          />
        )}
      </div>
    );
  }
}

export default App;
