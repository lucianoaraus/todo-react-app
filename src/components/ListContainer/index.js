import React, { useContext } from "react";
import ListContext from "../Context/ListContext";

import NewItem from "../NewItem";
import Item from "../Item";
import RealizedItem from "../RealizedItem";

import "./styles.scss";

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
