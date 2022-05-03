import React from "react";
import { Form } from "./Form";
import classes from "./UpdateForm.module.css";

export const UpdateForm = (props) => {
  return (
    <div className={classes.UpdateForm}>
      <Form {...props} />
    </div>
  );
};
