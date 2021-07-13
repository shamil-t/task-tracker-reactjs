import { useState } from "react";
import React from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert("Please add Task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <div>
      <form action="" className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="">Task</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add Task"
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Date & Time</label>
          <input
            type="text"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            placeholder="Add Date and Time"
          />
        </div>
        <div className="form-control form-control-check">
          <label htmlFor="">Set Reminder</label>
          <input
            type="checkbox"
            value={reminder}
            checked={reminder}
            onChange={(e) => setReminder(e.target.checked)}
          />
        </div>
        <input type="submit" className="btn btn-block" value="Save" />
      </form>
    </div>
  );
};

export default AddTask;
