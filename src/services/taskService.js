import api from "./api";

// Get all tasks
export const fetchTasks = async () => {
  const res = await api.get("/tasks");
  return res.data;
};

// Create task
export const createTask = async (title) => {
  const res = await api.post("/tasks", { title });
  return res.data;
};

// Update task status
export const updateTaskStatus = async (id, status) => {
  const res = await api.put(`/tasks/${id}`, { status });
  return res.data;
};

// Delete task
export const deleteTask = async (id) => {
  await api.delete(`/tasks/${id}`);
};