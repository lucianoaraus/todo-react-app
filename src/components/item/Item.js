import "./item.css";

function Item(data) {
  return (
    <div className="item-container">
      <p className="item-text">This is a normal test task</p>
      <button style={{ background: "none", border: "none" }}>
        <span class="material-icons remove-icon">close</span>
      </button>
      <button style={{ background: "none", border: "none" }}>
        <span class="material-icons check-icon">done</span>
      </button>
    </div>
  );
}

export default Item;
