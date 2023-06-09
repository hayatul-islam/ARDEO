import axios from "../../utils/axios";

export const getUsers = async () => {
  const response = await axios.get("/users");
  return response.data;
};

export const getUser = async (id) => {
  const response = await axios.get(`/users/${id}`);
  return response.data;
};
