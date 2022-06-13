import { useContext } from "react";
import ListContext from "../context/ListContext";
import "./styles.scss";

function RealizedItem({ data }) {
  const { deleteTask } = useContext(ListContext);
  const { content } = data;

  return (
    <div className="realized-item-container">
      <p
        className="realized-item-text"
        style={{ textDecoration: "line-through" }}
      >
        {content}
      </p>
      <button
        style={{ background: "none", border: "none" }}
        onClick={() => deleteTask(data)}
      >
        <span className="material-icons remove-icon">close</span>
      </button>
    </div>
  );
}

export default RealizedItem;
