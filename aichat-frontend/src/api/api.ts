import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:5000/api"
})

export default api
// Fetch characters from backend
export const getCharacters = async () => {
  const response = await api.get("/characters");
  return response.data;
};