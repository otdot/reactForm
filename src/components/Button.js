import React from "react";

export const Button = (props) => {
  return (
    <button
      name={props.name}
      style={{ backgroundColor: props.color }}
      onClick={props.click}
      className={props.style}
    >
      {props.text}
    </button>
  );
};
