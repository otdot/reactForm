import React from "react";
import classes from "./Form.module.css";

export const Form = (props) => {
  return (
    <form
      name="submit"
      onSubmit={props.submit}
      onChange={props.change}
      className={classes.Form}
    >
      <div>
        <label htmlFor="nickname">Nickname: </label>
        <input
          name="nickname"
          align="right"
          id="nickname"
          type="text"
          required
        />
      </div>
      <div>
        <label htmlFor="favouritemap">Favourite map: </label>
        <input name="favouritemap" id="favouritemap" type="text" required />
      </div>
      <div>
        <label htmlFor="rank">Rank: </label>
        <input name="rank" id="rank" type="text" required />
      </div>
      <div>
        <label htmlFor="telephone">Telephone: </label>
        <input name="telephone" id="telephone" type="tel" required />
      </div>
      <div>
        <label htmlFor="role">Role: </label>
        <select id="role" name="role">
          <option defaultValue="Entry" value="Entry">
            Entry
          </option>
          <option value="Lurker">Lurker</option>
          <option value="Support">Support</option>
        </select>
      </div>
      <div>
        <label htmlFor="moreinfo">Game style: </label>
        <textarea name="moreinfo" id="moreinfo" type="text" required />
      </div>
      <div>
        <input value="Send" type="submit" />
      </div>
    </form>
  );
};
