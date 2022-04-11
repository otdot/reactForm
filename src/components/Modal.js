import React from "react";
import { Button } from "./Button";
import classes from "./Modal.module.css";

export const Modal = (props) => {
  return (
    <div className={classes.Modal}>
      <h1>Your note: </h1>
      <div>
        <p className={classes.Heading}>Nickname: </p>
        <p className={classes.Input}>{props.nickname}</p>
      </div>
      <div>
        <p className={classes.Heading}>Fav map: </p>
        <p className={classes.Input}>{props.favouritemap}</p>
      </div>

      <div>
        <p className={classes.Heading}>Rank: </p>
        <p className={classes.Input}>{props.rank}</p>
      </div>

      <div>
        <p className={classes.Heading}>Phone: </p>
        <p className={classes.Input}>{props.telephone}</p>
      </div>

      <div>
        <p className={classes.Heading}>Role: </p>
        <p className={classes.Input}>{props.role}</p>
      </div>

      <div>
        <p className={classes.Heading}>Game style: </p>
        <p className={classes.Input}>{props.moreinfo}</p>
      </div>
      <Button
        name="send"
        click={props.ok}
        color="green"
        style={classes.sendButton}
        text="Post note"
      />
      <Button
        name="cancel"
        click={props.cancel}
        color="tomato"
        style={classes.cancelButton}
        text="No, I don't want to post it."
      />
    </div>
  );
};
