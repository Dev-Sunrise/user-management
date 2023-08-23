import axios from "./Axios";

const fetchDataUser = (page) => {
  return axios.get(`users?page=${page}`);
};

const createNewUser = (name, job) => {
  return axios.post(`users`, { name, job });
};

const updateUser = (name, job, id) => {
  return axios.put(`users/${id}`, { name, job });
};

const deleeUser = (id) => {
  return axios.delete(`users/${id}`);
};

const login = (email, password) => {
  return axios.post("login", { email, password });
};

export { createNewUser, deleeUser, fetchDataUser, login, updateUser };
