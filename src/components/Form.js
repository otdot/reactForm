import React from "react";
import classes from "./Form.module.css";

export const Form = (props) => {
  return (
    <form
      onSubmit={props.submit}
      onChange={props.change}
      className={classes.Form}
    >
      <div>
        <label htmlFor="nickname">Nickname: </label>
        <input name="nickname" align="right" id="nickname" type="text" />
      </div>
      <div>
        <label htmlFor="favouritemap">Favourite map: </label>
        <input name="favouritemap" id="favouritemap" type="text" />
      </div>
      <div>
        <label htmlFor="rank">Rank: </label>
        <input name="rank" id="rank" type="text" />
      </div>
      <div>
        <label htmlFor="telephone">Telephone: </label>
        <input name="telephone" id="telephone" type="tel" />
      </div>
      <div>
        <select name="role">
          <option value="Entry">Entry</option>
          <option value="Lurker">Lurker</option>
          <option value="Support">Support</option>
        </select>
      </div>
      <div>
        <label htmlFor="moreinfo">More information: </label>
        <textarea name="moreinfo" id="moreinfo" type="text" />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};
