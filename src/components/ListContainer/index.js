import React, { useContext, useState } from "react";
import ListContext from "../context/ListContext";

import NewItem from "../NewItem";
import Item from "../Item";
import RealizedItem from "../RealizedItem";

import "./styles.scss";

const filterOptions = ["All", "Completed", "Uncompleted"];

function ListContainer() {
  const { tasks, resetTasks } = useContext(ListContext);
  const [filterCase, setFilterCase] = useState(filterOptions[0]);

  const handleFilter = (event) => {
    const value = event.target.value;
    setFilterCase(value);
  };

  const FILTER_CASES = {
    All: tasks
      .filter((t) => !t.deleted)
      .map((task) => {
        if (!task.completed) {
          return <Item data={task} key={task.id} />;
        } else {
          return <RealizedItem data={task} key={task.id} />;
        }
      }),
    Completed: tasks
      .filter((t) => !t.deleted && t.completed)
      .map((task) => {
        return <RealizedItem data={task} key={task.id} />;
      }),
    Uncompleted: tasks
      .filter((t) => !t.deleted && !t.completed)
      .map((task) => {
        return <Item data={task} key={task.id} />;
      }),
  };

  return (
    <div className="list-container">
      <NewItem />

      {/* Filter Options Selector */}
      <select
        id="list"
        className="select-input"
        onChange={(e) => handleFilter(e)}
      >
        {filterOptions.map((p, i) => {
          return (
            <option value={p} key={i}>
              {p}
            </option>
          );
        })}
      </select>

      {/* Filtered Options */}
      {FILTER_CASES[filterCase]}

      <button className="reset-button" onClick={() => resetTasks()}>
        reset progress
      </button>
    </div>
  );
}

export default ListContainer;
