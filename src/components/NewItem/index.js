import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import ListContext from "../Context/ListContext";
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
        maxlength="90"
        /* Resolver el problema del largo del input para que no se salgan los caracteres del largo establecido */
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
