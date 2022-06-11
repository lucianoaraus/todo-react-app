import "./item.css";

function Item({ data }) {
  return (
    <div className="item-container">
      <p className="item-text">{data}</p>
      <button style={{ background: "none", border: "none" }}>
        <span className="material-icons remove-icon">close</span>
      </button>
      <button style={{ background: "none", border: "none" }}>
        <span className="material-icons check-icon">done</span>
      </button>
    </div>
  );
}

export default Item;
