import React from "react";

const KanbanHeader = ({ title, setTitle, onAdd }) => {

  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
      <h1 className="text-2xl font-medium">Mini Kanban</h1>

      <div
      className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task..."
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            // width: isMobile ? "100%" : "250px",
          }}
        />

        <button
          onClick={onAdd}
          style={{
            padding: "10px 16px",
            background: "#7A4ED9",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            // width: isMobile ? "100%" : "auto",
          }}
        >
          Add new task
        </button>
      </div>
    </div>
  );
};

export default KanbanHeader;
