import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container">
      <div className="title">Task Manager</div>
      <div className="subtitle">
        Manage tasks and collaborate with comments
      </div>

      <TaskList />
    </div>
  );
}

export default App;
