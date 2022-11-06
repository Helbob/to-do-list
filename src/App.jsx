import { useState } from "react";
//import reactLogo from './assets/react.svg'
import "./App.css";
import ListItem from "./conponments/ListItem";
import List from "./conponments/List";
import Form from "./conponments/Form";

function App() {
  const [tasks, setTasks] = useState([
    { task: "Clean Cat", id: 1 },
    { task: "Clean House", id: 2 },
  ]);

  function deleteTask(id) {
    setTasks((oldTasks) => oldTasks.filter((task) => task.id !== id));
  }
  function addTask(task) {
    const newTask = {
      id: Date.now(),
      task: task,
    };
    setTasks((oldTasks) => oldTasks.concat(newTask));
  }
  return (
    <div className="App">
      <fieldset>
        <legend>App</legend>
        <Form addTask={addTask}></Form>
        <List deleteTask={deleteTask} tasks={tasks}></List>
      </fieldset>
    </div>
  );
}

export default App;
