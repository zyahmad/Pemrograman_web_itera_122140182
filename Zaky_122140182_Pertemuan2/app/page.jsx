"use client";
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import styles from './Home.module.css';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      setTasks(storedTasks);
    };
    loadTasks();
  }, []);

  const saveTasks = async (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
    saveTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <TaskForm onSubmit={editingTask ? updateTask : addTask} initialTask={editingTask} />
        <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
      </div>
    </div>
  );
};

export default Home;