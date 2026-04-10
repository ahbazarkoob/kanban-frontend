import React from "react";

const KanbanHeader = ({ title, setTitle, onAdd }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "40px",
      }}
    >
      <h1>Mini Kanban</h1>

      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task..."
          style={{ padding: "8px", marginRight: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
        />

        <button
          onClick={onAdd}
          style={{
            padding: "8px 16px",
            background: "#7A4ED9",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add new task
        </button>
      </div>
    </div>
  );
};

export default KanbanHeader;
