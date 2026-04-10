import React from "react";

const TaskCard = ({ task, onMove, onDelete, moveLabel, isDone }) => {
  return (
    <div className="flex flex-col gap-2 p-2.5 border border-white rounded-lg bg-white shadow-sm">
      <p>{task.title}</p>
      <div className="flex gap-2">
        <button
          onClick={() => onMove(task.id)}
          className="text-sm px-2 py-1 rounded text-[#0E900F] bg-[#0E900F44] border-[#0E900F]"
        >
          {moveLabel}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-sm px-2 py-1 rounded text-red-500 bg-red-100 border-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default TaskCard;
