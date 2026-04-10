import React from "react";

const TaskCard = ({ task, onMove, onDelete, moveLabel, isDone }) => {
  return (
    <div
      style={{
        padding: "10px",
        marginBottom: "10px",
        border: "1px solid #ccc",
        borderColor: isDone ? "#5AE881" : "#7A4ED9",
        borderRadius: "16px",
        background: isDone ? "#5AE88133" : "#7A4ED933",
      }}
    >
      {" "}
      <p>{task.title}</p>{" "}
      <button
        onClick={() => onMove(task.id)}
        style={{
          padding: "4px 8px",
          border: "1px solid #0E900F",
          borderRadius: "4px",
          backgroundColor: "#0E900F44",
          color: "#0E900F",
        }}
      >
        {moveLabel}
      </button>{" "}
      <button
        onClick={() => onDelete(task.id)}
        style={{
          padding: "4px 8px",
          marginLeft: "10px",
          border: "1px solid #ED584E77",
          borderRadius: "4px",
          backgroundColor: "#ED584E77",
          color: "red",
        }}
      >
        {" "}
        Delete{" "}
      </button>{" "}
    </div>
  );
};
export default TaskCard;
