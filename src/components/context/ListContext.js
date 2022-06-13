import { createContext, useState } from "react";

const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (cont) => {
    const text = cont.data;
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        content: text,
        completed: false,
        deleted: false,
      },
    ]);
  };

  const deleteTask = (task) => {
    const newList = tasks.map((t) => {
      if (t.id === task.id) {
        return {
          ...t,
          deleted: true,
        };
      }
      return t;
    });
    setTasks(newList);
  };

  const completeTaskSwitch = (task) => {
    const newList = tasks.map((t) => {
      if (t.id === task.id) {
        return {
          ...t,
          completed: true,
        };
      }
      return t;
    });
    setTasks(newList);
  };

  const resetTasks = () => {
    setTasks([]);
  };

  console.log("tasks desde context", tasks);

  const data = {
    tasks,
    addNewTask,
    deleteTask,
    resetTasks,
    completeTaskSwitch,
  };

  return <ListContext.Provider value={data}>{children}</ListContext.Provider>;
};

export { ListProvider };
export default ListContext;
