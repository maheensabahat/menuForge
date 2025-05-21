import axios from "axios";
import { API_URL } from "../utils/constants";
import { generateApiPayload } from "../utils/helpers";

const auth_URL = `${API_URL}auth`;

export const login = async (data) => {
  try {
    const api = axios.create(generateApiPayload(auth_URL));
    const response = await api.post("/Login", data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const signup = async (data) => {
  try {
    const api = axios.create(generateApiPayload(auth_URL));
    const response = await api.post("/Signup", data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
