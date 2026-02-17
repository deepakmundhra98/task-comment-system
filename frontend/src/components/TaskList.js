import { useEffect, useState } from "react";
import { getTasks, deleteTask, updateTask } from "../api";
import TaskForm from "./TaskForm";
import CommentSection from "./CommentSection";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data.data || res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <TaskForm onTaskCreated={loadTasks} />

      {tasks.map((task) => (
        <div key={task.id} className="card">
          <div className="task-header">
            <div className="task-title">{task.title}</div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                className={`badge ${task.status}`}
                onClick={() =>
                  updateTask(task.id, {
                    status:
                      task.status === "pending"
                        ? "completed"
                        : "pending",
                  }).then(loadTasks)
                }
              >
                {task.status}
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id).then(loadTasks)}
              >
                Delete
              </button>
            </div>
          </div>

          <CommentSection taskId={task.id} />
        </div>
      ))}
    </>
  );
}
