import React, { useContext, useState } from "react";
import ListContext from "../context/ListContext";

import NewItem from "../NewItem";
import Item from "../Item";
import RealizedItem from "../RealizedItem";

import "./styles.scss";

const filterOptions = ["All", "Completed", "Uncompleted"];

function ListContainer() {
  const { tasks, resetTasks } = useContext(ListContext);
  const [filter, setFilter] = useState(filterOptions[0]);

  const handleFilter = (event) => {
    const value = event.target.value;
    setFilter(value);
  };

  return (
    <div className="list-container">
      <NewItem />

      {/* Filter Options */}
      <select id="list" onChange={(e) => handleFilter(e)}>
        {filterOptions.map((p, i) => {
          return (
            <option value={p} key={i}>
              {p}
            </option>
          );
        })}
      </select>

      {tasks
        .filter((t) => !t.deleted)
        .map((task) => {
          if (!task.completed) {
            return <Item data={task} key={task.id} />;
          } else {
            return <RealizedItem data={task} key={task.id} />;
          }
        })}

      <button className="reset-button" onClick={() => resetTasks()}>
        reset progress
      </button>
    </div>
  );
}

export default ListContainer;
