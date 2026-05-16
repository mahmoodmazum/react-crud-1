import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
});

// GET all users
export const getUsers = () => API.get("/users");

// GET one user
export const getUser = (id) => API.get(`/users/${id}`);

export const searchUsers = (query) => API.get(`/users?q=${query}`);

// POST - create user
export const createUser = (data) => API.post("/users", data);

// PUT - update user
export const updateUser = (id, data) => API.put(`/users/${id}`, data);

// DELETE - delete user
export const deleteUser = (id) => API.delete(`/users/${id}`);
