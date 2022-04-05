import React from "react";
import classes from "./Modal.module.css";

export const Modal = (props) => {
  return (
    <div className={classes.Modal}>
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
    </div>
  );
};
