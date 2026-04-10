import React from "react";
import TaskCard from "./TaskCard";

const Column = ({ title, tasks, onMove, onDelete, moveLabel, isDone }) => {
  return (
    <div
      style={{
        flex: 1,
        padding: "20px",
        border: "1px solid #f9f9f9",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {" "}
      <h2
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderColor: isDone ? "#5AE881" : "#7A4ED9",
          borderRadius: "16px",
          background: isDone ? "#5AE88133" : "#7A4ED933",
          color: isDone ? "#5AE881" : "#7A4ED9",
        }}
      >
        {title}
      </h2>{" "}
      {tasks.length === 0 ? (
        <p style={{ color: "#888" }}>No tasks</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            task={task}
            onMove={onMove}
            onDelete={onDelete}
            moveLabel={moveLabel}
            isDone={isDone}
          />
        ))
      )}{" "}
    </div>
  );
};
export default Column;
