import { useState } from "react";
import { useTasks } from "./hooks/useTasks";
import KanbanHeader from "./features/kanban/KanbanHeader";
import Column from "./features/kanban/column";

function App() {
  const { tasks, loading, addTask, updateStatus, removeTask } = useTasks();
  const [title, setTitle] = useState("");

  const todoTasks = tasks.filter((t) => t.status === "todo");
  const doneTasks = tasks.filter((t) => t.status === "done");

  const handleAdd = () => {
    if (!title || typeof title !== "string") return;
    if (!title.trim()) return;

    addTask(title);
    setTitle("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <KanbanHeader title={title} setTitle={setTitle} onAdd={handleAdd} />

      {/* Columns */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={styles.columns}>
          <Column
            title="To Do"
            tasks={todoTasks}
            onMove={(id) => updateStatus(id, "done")}
            onDelete={removeTask}
            moveLabel="Done"
          />

          <Column
            title="Done"
            tasks={doneTasks}
            onMove={(id) => updateStatus(id, "todo")}
            onDelete={removeTask}
            moveLabel="Undo"
            isDone
          />
        </div>
      )}
    </div>
  );
}

export default App;

const styles = {
  columns: {
    display: "flex",
    gap: "40px",
  },
};
