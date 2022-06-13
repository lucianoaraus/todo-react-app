import { useContext } from "react";
import ListContext from "../context/ListContext";
import CloseIcon from "@mui/icons-material/Close";
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
        <CloseIcon style={{ color: "#d36f5f", fontSize: "32px" }} />
      </button>
    </div>
  );
}

export default RealizedItem;
