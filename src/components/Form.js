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
          defaultValue={props.nickname}
        />
      </div>
      <div>
        <label htmlFor="favouritemap">Favourite map: </label>
        <input
          name="favouritemap"
          id="favouritemap"
          type="text"
          required
          defaultValue={props.favouritemap}
        />
      </div>
      <div>
        <label htmlFor="rank">Rank: </label>
        <input
          name="rank"
          id="rank"
          type="text"
          required
          defaultValue={props.rank}
        />
      </div>
      <div>
        <label htmlFor="telephone">Telephone: </label>
        <input
          name="telephone"
          id="telephone"
          type="tel"
          required
          defaultValue={props.telephone}
        />
      </div>
      <div>
        <label htmlFor="role">Role: </label>
        <select id="role" name="role" required defaultValue={props.role}>
          <option value="" invalid="true" hidden>
            Select a role
          </option>
          <option value="Entry">Entry</option>
          <option value="Lurker">Lurker</option>
          <option value="Support">Support</option>
        </select>
      </div>
      <div>
        <label htmlFor="moreinfo">Game style: </label>
        <textarea
          name="moreinfo"
          id="moreinfo"
          type="text"
          required
          defaultValue={props.moreinfo}
        />
      </div>
      <div>
        <input value={props.text} type="submit" />
      </div>
    </form>
  );
};
