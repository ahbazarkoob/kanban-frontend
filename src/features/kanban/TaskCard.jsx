import React from "react";

const TaskCard = ({ task, onMove, onDelete, moveLabel, isDone }) => {
  return (
    <div
      style={{
        padding: "10px",
        marginBottom: "10px",
        border: "1px solid #ccc",
        borderColor: "white",
        borderRadius: "16px",
        background: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
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
