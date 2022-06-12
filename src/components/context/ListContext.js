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
      },
    ]);
  };

  const removeTask = (task) => {
    const newList = tasks.filter(t => t.id != task.id)
    setTasks(newList)
  };

  const data = {
    tasks,
    addNewTask,
    removeTask
  };

  return <ListContext.Provider value={data}>{children}</ListContext.Provider>;
};

export { ListProvider };
export default ListContext;
