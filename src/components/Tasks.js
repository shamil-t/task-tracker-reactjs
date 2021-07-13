import "../App.css";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, toggle }) => {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} toggle={toggle}/>
      ))}
    </div>
  );
};

export default Tasks;
