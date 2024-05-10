import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/taskCreate";
import TaskList from "./components/taskList";

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);

  const createTask = (title, taskDesc) => {
    console.log(title, taskDesc);
    const createdTasks = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 99999),
        title,
        taskDesc,
      },
    ];
    setTasks(createdTasks);

    console.log("createdTasks", createdTasks);
    console.log("tasks", tasks);
  };
  const deleteTaskById = (id) => {
    const afterDeleteTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeleteTask);
  };

  return (
    <div className="container">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} />
    </div>
  );
}

export default App;
