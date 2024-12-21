import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const App = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = (newTask: { title: string; description: string; dueDate: string }) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskToDelete: { title: string; description: string; dueDate: string }) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
