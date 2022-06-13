import React, { useContext } from "react";
import ListContext from "../context/ListContext";

import NewItem from "../NewItem";
import Item from "../Item";
import RealizedItem from "../RealizedItem";

import "./styles.scss";

function ListContainer() {
  const { tasks, resetTasks } = useContext(ListContext);

  return (
    <div className="list-container">
      <NewItem />

      {tasks
        .filter((t) => !t.deleted)
        .map((task) => {
          if (!task.completed) {
            return <Item data={task} key={task.id} />;
          } else {
            return <RealizedItem data={task} key={task.id} />;
          }
        })}

      <button
        style={{ background: "none", border: "none", color: "white" }}
        onClick={() => resetTasks()}
      >
        reset progress
      </button>
    </div>
  );
}

export default ListContainer;
