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

  const data = {
    tasks,
    addNewTask,
  };

  return <ListContext.Provider value={data}>{children}</ListContext.Provider>;
};

export { ListProvider };
export default ListContext;
