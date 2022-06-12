import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import ListContext from "../context/ListContext";
import "./styles.scss";

function NewItem() {
  const { register, handleSubmit } = useForm();
  const { addNewTask } = useContext(ListContext);

  const onSubmit = (data, e) => {
    addNewTask(data);
    e.target.reset();
  };

  return (
    <form className="new-item-container" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="new-item-input"
        placeholder="Add new item"
        maxLength="60"
        /*TODO: si supera el largo establecido tirar error */
        {...register("data")}
      />
      <button
        style={{ background: "none", border: "none" }}
        type="submit"
        value="submit"
      >
        <span className="material-icons plus-icon">add</span>
      </button>
    </form>
  );
}

export default NewItem;
