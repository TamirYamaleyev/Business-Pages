import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "https://localhost:7222/api";

export const login = async (user) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users/login`, user);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const signup = async (normalizedUser) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users`, normalizedUser);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getUserData = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/user`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
