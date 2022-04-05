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
    console.log(this.state.nickname);
    console.log(this.state.showModal);

    this.setState({ showModal: true });
  };

  render() {
    return (
      <div className="app">
        <Form submit={this.handleSubmit} change={this.handleChange} />
        <View
          nickname={this.state.nickname}
          favouritemap={this.state.favouritemap}
          rank={this.state.rank}
          telephone={this.state.telephone}
          role={this.state.role}
          moreinfo={this.state.moreinfo}
        />
        <div>
          {this.state.showModal ? (
            <Modal
              nickname={this.state.nickname}
              favouritemap={this.state.favouritemap}
              rank={this.state.rank}
              telephone={this.state.telephone}
              role={this.state.role}
              moreinfo={this.state.moreinfo}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default App;
