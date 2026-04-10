import React from "react";
import TaskCard from "./TaskCard";

const Column = ({ title, tasks, onMove, onDelete, moveLabel, isDone }) => {
  return (
    <div className="flex-1 p-4 border rounded-lg bg-gray-100 flex flex-col gap-4">
      <h2
        className="text-lg font-medium p-2.5 rounded-lg border "
        style={{
          borderColor: isDone ? "#5AE881" : "#7A4ED9",
          background: isDone ? "#5AE88133" : "#7A4ED933",
          color: isDone ? "#5AE881" : "#7A4ED9",
        }}
      >
        {title}
      </h2>
      {tasks.length === 0 ? (
        <p className="text-[#888]">No tasks</p>
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
