import React from "react";
import TaskCard from "./TaskCard";

const Column = ({ title, tasks, onMove, onDelete, moveLabel, isDone }) => {
  return (
    <div style={{ flex: 1 }}>
      {" "}
      <h2>{title}</h2>{" "}
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
