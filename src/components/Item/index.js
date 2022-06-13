import { useContext } from "react";
import ListContext from "../context/ListContext";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

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
        <CloseIcon style={{ color: "#d36f5f", fontSize: "32px" }} />
      </button>
      <button
        style={{ background: "none", border: "none" }}
        onClick={() => completeTaskSwitch(data)}
      >
        <DoneIcon style={{ color: "#83d9aa", fontSize: "32px" }} />
      </button>
    </div>
  );
}

export default Item;
