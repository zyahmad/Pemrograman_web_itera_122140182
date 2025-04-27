"use client";
import React, { useState } from 'react';

const TaskForm = ({ onSubmit, initialTask }) => {
  const [title, setTitle] = useState(initialTask ? initialTask.title : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, id: initialTask ? initialTask.id : Date.now() });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <button type="submit">{initialTask ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TaskForm;