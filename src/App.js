import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "5th Feb 2021 at 1.30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "6th Feb 2021 at 5.30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "8th Feb 2021 at 11.30am",
      reminder: false,
    },
    {
      id: 4,
      text: "Tution Class",
      day: "8th Feb 2021 at 9.30am",
      reminder: true,
    },
  ]);

  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 1000) + 1;
    console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="App">
      <Header title='Task Tracker' onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} />
      {showAdd && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} toggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
