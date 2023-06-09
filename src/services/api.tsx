import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_DATABASE_URL,
});

export function authorization(token: string) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export default instance;
