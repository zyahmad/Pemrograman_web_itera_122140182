"use client";
import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span>{task.title}</span>
          <button onClick={() => onEdit(task)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;