import "./realized-item.css";

function RealizedItem(data) {
  return (
    <div className="realized-item-container">
      <p
        className="realized-item-text"
        style={{ textDecoration: "line-through" }}
      >
        This is a normal test task
      </p>
      <button style={{ background: "none", border: "none" }}>
        <span className="material-icons remove-icon">close</span>
      </button>
    </div>
  );
}

export default RealizedItem;
