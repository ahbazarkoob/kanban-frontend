import { useEffect, useState } from "react";
import {
  fetchTasks,
  createTask,
  updateTaskStatus,
  deleteTask,
} from "../services/taskService";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load tasks
  const loadTasks = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (err) {
      console.error("Load error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Add
  const addTask = async (title) => {
    if (!title.trim()) return;

    try {
      const newTask = await createTask(title);
      setTasks((prev) => [...prev, newTask]);
    } catch (err) {
      console.error("Add error:", err);
    }
  };

  // Update
  const updateStatus = async (id, status) => {
    try {
      const updated = await updateTaskStatus(id, status);

      setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  // Delete
  const removeTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return {
    tasks,
    loading,
    addTask,
    updateStatus,
    removeTask,
  };
};
