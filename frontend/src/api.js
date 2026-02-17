import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000",
});

export const getTasks = () => API.get("/tasks");
export const createTask = (data) => API.post("/tasks", data);
export const updateTask = (id, data) => API.put(`/tasks/${id}`, data);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);

export const getComments = (taskId) =>
  API.get(`/tasks/${taskId}/comments`);

export const addComment = (taskId, data) =>
  API.post(`/tasks/${taskId}/comments`, data);

export const updateComment = (id, data) =>
  API.put(`/comments/${id}`, data);

export const deleteComment = (id) =>
  API.delete(`/comments/${id}`);
