import { useContext } from "react";
import ListContext from "../context/ListContext";
import "./styles.scss";

function Item({ data }) {
  const { deleteTask, completeTaskSwitch } = useContext(ListContext);
  const { content } = data;

  return (
    <div className="item-container">
      <p className="item-text">{content}</p>
      <button
        style={{ background: "none", border: "none" }}
        onClick={() => deleteTask(data)}
      >
        <span className="material-icons remove-icon">close</span>
      </button>
      <button
        style={{ background: "none", border: "none" }}
        onClick={() => completeTaskSwitch(data)}
      >
        <span className="material-icons check-icon">done</span>
      </button>
    </div>
  );
}

export default Item;
