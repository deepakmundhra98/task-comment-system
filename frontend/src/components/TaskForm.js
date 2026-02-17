import { useState } from "react";
import { createTask } from "../api";

export default function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!title) return;

    await createTask({ title });
    setTitle("");
    onTaskCreated();
  };

  return (
    <form className="task-form" onSubmit={submit}>
      <input
        className="task-input"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="primary-btn">Add Task</button>
    </form>
  );
}
