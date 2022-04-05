import React from "react";
import classes from "./View.module.css";

export const View = (props) => {
  return (
    <div className={classes.View}>
      <span className={classes.Margin}></span>
      <p className={classes.Heading}>Nickname: </p>
      <p className={classes.Input}>{props.nickname}</p>
      <span className={classes.Line}></span>
      <p className={classes.Heading}>Fav map: </p>
      <p className={classes.Input}>{props.favouritemap}</p>
      <span className={classes.Line}></span>
      <p className={classes.Heading}>Rank: </p>
      <p className={classes.Input}>{props.rank}</p>
      <span className={classes.Line}></span>
      <p className={classes.Heading}>Phone: </p>
      <p className={classes.Input}>{props.telephone}</p>
      <span className={classes.Line}></span>
      <p className={classes.Heading}>Role: </p>
      <p className={classes.Input}>{props.role}</p>
      <span className={classes.Line}></span>
      <p className={classes.Heading}>Game style: </p>
      <p className={classes.Input}>{props.moreinfo}</p>
    </div>
  );
};
