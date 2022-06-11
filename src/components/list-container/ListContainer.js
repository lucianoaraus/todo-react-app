import "./list-container.css";
import NewItem from "../new-item/NewItem";
import Item from "../item/Item";
import RealizedItem from "../realized-item/RealizedItem";

function ListContainer() {
  return (
    <div className="list-container">
      <NewItem />
      <Item />
      <Item />
      <RealizedItem />
    </div>
  );
}

export default ListContainer;
