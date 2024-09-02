import axios from "axios";

export const axiosClient = axios.create({
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});
