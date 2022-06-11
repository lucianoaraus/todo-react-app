import React, { useContext } from "react";
import ListContext from "../context/ListContext";

import NewItem from "../new-item/NewItem";
import Item from "../item/Item";
import RealizedItem from "../realized-item/RealizedItem";

import "./list-container.css";

function ListContainer() {
  const { tasks } = useContext(ListContext);

  return (
    <div className="list-container">
      <NewItem />
      {tasks.map((task) => {
        return <Item data={task.content} key={task.id} />;
      })}

      <RealizedItem />
      <button style={{ background: "none", border: "none", color: "white" }}>
        reset progress
      </button>
    </div>
  );
}

export default ListContainer;
