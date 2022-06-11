import "./new-item.css";

function NewItem() {
  return (
    <div className="new-item-container">
      <input className="new-item-input" placeholder="Add new item" />
      <button style={{ background: "none", border: "none" }}>
        <span class="material-icons plus-icon">add</span>
      </button>
    </div>
  );
}

export default NewItem;
