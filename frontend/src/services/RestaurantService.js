import axios from "axios";
import { API_URL } from "../utils/constants";
import { generateApiPayload } from "../utils/helpers";

const auth_URL = `${API_URL}restaurants`;

export const createNewRestauarant = async (data) => {
  console.log(data);
  try {
    const api = axios.create(generateApiPayload(auth_URL));
    const response = await api.post("/", data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
