import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import AddIcon from "@mui/icons-material/Add";
import ListContext from "../context/ListContext";
import "./styles.scss";

function NewItem() {
  const { register, handleSubmit } = useForm();
  const { addNewTask } = useContext(ListContext);

  const onSubmit = (data, e) => {
    addNewTask(data);
    e.nativeEvent.target.reset();
  };

  return (
    <form className="new-item-container" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="new-item-input"
        placeholder="New note"
        maxLength="25"
        autoComplete="off"
        required
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
        {...register("data")}
      />
      <button
        style={{ background: "none", border: "none" }}
        type="submit"
        value="submit"
      >
        <AddIcon style={{ color: "#f0f8ff", fontSize: "32px" }} />
      </button>
    </form>
  );
}

export default NewItem;
