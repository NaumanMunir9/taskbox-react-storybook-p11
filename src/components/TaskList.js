// libraries
import React from "react";

// components
import Task from "./Task";

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) return <div className="list-items">loading...</div>;

  if (tasks.length === 0) return <div className="list-items">Empty...</div>;

  return (
    <div className="list-item">
      {tasks.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}