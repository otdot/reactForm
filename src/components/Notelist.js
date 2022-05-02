import React, { Component } from "react";
import axios from "axios";
import classes from "./Notelist.module.css";

export class Notelist extends Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3001/notes/").then((response) => {
      const note = response.data.map((note) => {
        return note;
      });
      this.setState({ notes: note });
    });
  }
  render() {
    return (
      <ol className={classes.Notelist}>
        {this.state.notes.map((note) => {
          return (
            <li key={note.id}>
              {note.nickname} {note.favouritemap} {note.gamestyle} {note.rank}{" "}
              {note.role} {note.telephone}
            </li>
          );
        })}
      </ol>
    );
  }
}
