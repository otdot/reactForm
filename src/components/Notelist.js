import React, { Component } from "react";
import axios from "axios";
import classes from "./Notelist.module.css";

export class Notelist extends Component {
  state = {
    notes: [],
  };

  deleteHandler = (id) => {
    axios.delete(`http://localhost:3001/notes/${id}`).then((res) => {
      const note = this.state.notes.filter((note) => note.id !== id);
      this.setState({ notes: note });
    });
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
    console.log(this.state.notes);
    return (
      <ol className={classes.Notelist}>
        {this.state.notes.map((note) => {
          return (
            <li key={note.id}>
              {note.nickname} | {note.favouritemap} | {note.gamestyle} |{" "}
              {note.rank} |{note.role} | {note.telephone} |
              <span
                onClick={() => this.props.update(note)}
                className="material-symbols-outlined"
              >
                update
              </span>
              <span
                onClick={() => this.deleteHandler(note.id)}
                className="material-symbols-outlined"
              >
                delete
              </span>
            </li>
          );
        })}
      </ol>
    );
  }
}
